# thedatadudech.github.io

Personal website of Dr. Markus Clauss (Abdullah Isa), served by GitHub
Pages at <https://www.thedatadude.de> (also reachable as thedatadudech.github.io).

Plain HTML and CSS with a small theme-toggle script. No build step, no
framework, no trackers, no external fonts.

## Content

The projects section presents the seven Sira Labs projects
(<https://siralabs.org>) in three tracks, followed by a short "Earlier work"
list of older personal repositories:

| Track | Project | Status on the site |
| --- | --- | --- |
| Learning | Suffa | Preview |
| Learning | Arqam | Preview |
| Learning | ʿArḍa | Early build |
| Data | Tabayyun | Preview |
| Data | Sahifa | Preview |
| Security | Thawr | Release candidate |
| Security | Khandaq | Design |

Wording, order and statuses follow siralabs.org and the Sira-Labs organisation
profile. ʿArḍa is not listed there yet; its card is taken from its README and
should be aligned once siralabs.org adds it. When a status changes on
siralabs.org, update the card in `site/index.html` and `docs/SITE.md`.

## Layout

| Path | Purpose |
| --- | --- |
| `site/` | The published site. `index.html` is the whole page; `404.html`, `robots.txt`, `sitemap.xml`, `CNAME` and `.nojekyll` sit next to it. |
| `site/assets/` | Stylesheet, theme script and SVG favicon. |
| `scripts/check_site.py` | Acceptance checks: local links and assets resolve, nothing is loaded from third parties, required sections exist. |
| `docs/SITE.md` | Content and design spec for the site, including open placeholders. |
| `.github/workflows/deploy.yml` | Runs the checks and publishes `site/` to the `gh-pages` branch. |

## Working on it

```sh
python3 scripts/check_site.py          # acceptance checks
python3 -m http.server -d site 8000    # preview at http://localhost:8000
```

Push to `main` and the workflow deploys. The Pages source is the
`gh-pages` branch, as it was before the rebuild. `site/CNAME` sets the custom
domain `www.thedatadude.de`; keep the file or GitHub drops the domain on the
next deploy.

## Placeholders

Four items are deliberately left open and marked with `TODO(2026-09-05)`
comments in `site/index.html`:

- public email address (contact section)
- RePEc author page URL (publications section)
- DOI for Clauss and Schnabel (2008), if one exists (publications section)
- title and co-authors of the 2006 ZEW Wachstums- und Konjunkturanalysen
  contribution (publications section)

`scripts/check_site.py` lists them as warnings until they are filled in.
