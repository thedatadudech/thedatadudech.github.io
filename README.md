# thedatadudech.github.io

Personal website of Dr. Markus Clauss (Abdullah Isa), served by GitHub
Pages at <https://thedatadudech.github.io>.

Plain HTML and CSS with a small theme-toggle script. No build step, no
framework, no trackers, no external fonts.

## Layout

| Path | Purpose |
| --- | --- |
| `site/` | The published site. `index.html` is the whole page; `404.html`, `robots.txt`, `sitemap.xml` and `.nojekyll` sit next to it. |
| `site/assets/` | Stylesheet, theme script, SVG favicon and the Thawr mark. |
| `scripts/check_site.py` | Acceptance checks: local links and assets resolve, nothing is loaded from third parties, required sections exist. |
| `docs/SITE.md` | Content and design spec for the site, including open placeholders. |
| `.github/workflows/deploy.yml` | Runs the checks and publishes `site/` to the `gh-pages` branch. |

## Working on it

```sh
python3 scripts/check_site.py          # acceptance checks
python3 -m http.server -d site 8000    # preview at http://localhost:8000
```

Push to `main` and the workflow deploys. The Pages source is the
`gh-pages` branch, as it was before the rebuild; there is no custom domain.

## Placeholders

Two items are deliberately left open and marked with `TODO(2026-09-05)`
comments in `site/index.html`:

- public email address (contact section)
- RePEc author page URL (publications section)

`scripts/check_site.py` lists them as warnings until they are filled in.
