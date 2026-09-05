# Site spec

This document is the source of truth for <https://thedatadudech.github.io>.
Change it first, then the page.

## Purpose

Present Markus Clauss as an AI expert who leads AI and data science work in
the energy sector in Dhahran and who builds software with AI coding agents
from written specifications. The site is about the person; Thawr is the
flagship project, not the subject.

## Themes, in order

1. AI agents and LLM systems
2. Building with AI (spec-driven development, agent writes the code)
3. AI research and evaluation
4. ML and data science

## Sections

| Id | Content |
| --- | --- |
| `top` | Name, one-line positioning, Dhahran, four key facts. |
| `how-i-work` | Spec-driven development: vision, architecture, ADRs, threat model, acceptance tests are the source of truth. The loop. Why project names come from the Sira. |
| `projects` | Thawr featured; six further projects with GitHub links and a theme label each. |
| `background` | Career, education, expertise, awards, origin. Employer in Dhahran is not named. |
| `publications` | Two peer-reviewed articles (DOI where verified) and the working papers, each with a verified link. |
| `contact` | GitHub, LinkedIn, email placeholder. |

## Tone

English. Direct sentences. Religious references are meaning, not
decoration: the honorific ﷺ is used after the Prophet's name, and project
names are explained by the moment in the Sira they refer to. No employer
name for the current role.

## Design

- Palette from Thawr: navy `#0b2233`, blues `#1d4f7a` to `#4fc3c8`, teal `#3fb8c4`.
- Light and dark mode. Default follows `prefers-color-scheme`; the toggle
  stores an explicit choice in `localStorage` and sets `data-theme` on
  `<html>`. Without JavaScript the site still renders in both modes.
- System font stack. No web fonts, no analytics, no third-party requests.
  `scripts/check_site.py` fails the build if one is introduced.
- Single page, responsive from 320px up, semantic HTML, skip link,
  focus styles, reduced-motion respected.

## Deployment

GitHub Pages serves the `gh-pages` branch. The workflow in
`.github/workflows/deploy.yml` runs the checks on every push to `main` and
publishes `site/` to `gh-pages` as an orphan commit. No CNAME: the site has
no custom domain.

## Open placeholders

Marked as `TODO(2026-09-05)` in `site/index.html`:

- public email address
- RePEc author page URL
- DOI for Clauss and Schnabel (2008), if one exists
- title and co-authors of the 2006 ZEW Wachstums- und Konjunkturanalysen contribution

## Verified sources

Links on the page were checked on 2026-09-05. Titles and author lists of
the ZEW discussion papers and the IAB report were taken from the PDFs
themselves.
