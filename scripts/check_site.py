#!/usr/bin/env python3
"""Acceptance checks for the static site in ``site/``.

The site promises three things that are easy to break by accident:

1. every local link and asset resolves to a file in ``site/``;
2. nothing is loaded from a third party (no external scripts, stylesheets,
   fonts, iframes or images), so the page cannot phone home;
3. the page is well-formed enough for a browser and has the sections
   the content spec requires.

Run ``python3 scripts/check_site.py`` from the repository root. Exit code
is non-zero on any failure. Remaining content placeholders are reported
as warnings, not failures, so the site can ship while they are filled in.
"""

from __future__ import annotations

import logging
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

SITE = Path(__file__).resolve().parent.parent / "site"
REQUIRED_IDS = {"top", "how-i-work", "projects", "background", "publications", "contact"}
ALLOWED_EXTERNAL_SCHEMES = {"https", "mailto"}
# <link rel=...> values that make the browser fetch something.
LOADING_LINK_RELS = {"stylesheet", "icon", "preload", "modulepreload", "prefetch", "manifest"}
# Tags whose src/href fetch a resource at load time and must stay local.
LOAD_ATTRS = {
    "script": ("src",),
    "link": ("href",),
    "img": ("src", "srcset"),
    "iframe": ("src",),
    "video": ("src", "poster"),
    "audio": ("src",),
    "source": ("src", "srcset"),
    "object": ("data",),
    "embed": ("src",),
}

log = logging.getLogger("check_site")


class PageScanner(HTMLParser):
    """Collects ids, navigational links and loaded resources from one page."""

    def __init__(self) -> None:
        super().__init__()
        self.ids: set[str] = set()
        self.links: list[str] = []
        self.resources: list[tuple[str, str]] = []
        self.void_or_open: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr = {k: v or "" for k, v in attrs}
        if "id" in attr:
            self.ids.add(attr["id"])
        if tag == "a" and attr.get("href"):
            self.links.append(attr["href"])
        if tag == "link" and attr.get("rel", "") not in LOADING_LINK_RELS:
            return  # canonical, alternate, license... do not fetch anything
        for name in LOAD_ATTRS.get(tag, ()):
            if attr.get(name):
                self.resources.append((tag, attr[name]))


def is_external(url: str) -> bool:
    parts = urlsplit(url)
    return bool(parts.scheme) or url.startswith("//")


def local_target(page: Path, url: str) -> Path:
    path = urlsplit(url).path
    if path.startswith("/"):
        return SITE / path.lstrip("/")
    return (page.parent / path).resolve()


def check_page(page: Path) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    html = page.read_text(encoding="utf-8")
    scanner = PageScanner()
    scanner.feed(html)

    for tag, url in scanner.resources:
        if is_external(url):
            errors.append(f"{page.name}: external <{tag}> resource {url!r} is not allowed")
        elif not local_target(page, url).is_file():
            errors.append(f"{page.name}: <{tag}> resource {url!r} does not exist")

    for url in scanner.links:
        if url.startswith("#"):
            if url[1:] and url[1:] not in scanner.ids:
                errors.append(f"{page.name}: anchor {url!r} has no matching id")
        elif is_external(url):
            scheme = urlsplit(url).scheme
            if scheme not in ALLOWED_EXTERNAL_SCHEMES:
                errors.append(f"{page.name}: link {url!r} uses scheme {scheme!r}")
        elif not local_target(page, url).exists():
            errors.append(f"{page.name}: link {url!r} does not resolve")

    if page.name == "index.html":
        missing = REQUIRED_IDS - scanner.ids
        if missing:
            errors.append(f"{page.name}: required sections missing: {sorted(missing)}")

    for match in re.finditer(r"TODO\(\d{4}-\d{2}-\d{2}\)[^\n]*?(?=\s*-->|$)", html, re.M):
        warnings.append(f"{page.name}: {match.group(0).strip()}")
    return errors, warnings


def check_css(css: Path) -> list[str]:
    text = css.read_text(encoding="utf-8")
    errors = []
    for match in re.finditer(r"(@import|url\()\s*['\"]?(https?:|//)", text):
        errors.append(f"{css.name}: remote reference at offset {match.start()}")
    return errors


def main() -> int:
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")
    if not SITE.is_dir():
        log.error("site directory not found: %s", SITE)
        return 2

    errors: list[str] = []
    warnings: list[str] = []
    for page in sorted(SITE.glob("*.html")):
        page_errors, page_warnings = check_page(page)
        errors.extend(page_errors)
        warnings.extend(page_warnings)
    for css in sorted(SITE.rglob("*.css")):
        errors.extend(check_css(css))

    for warning in warnings:
        log.warning("placeholder: %s", warning)
    for error in errors:
        log.error(error)
    if errors:
        log.error("%d problem(s) found", len(errors))
        return 1
    log.info("site checks passed (%d placeholder(s) still open)", len(warnings))
    return 0


if __name__ == "__main__":
    sys.exit(main())
