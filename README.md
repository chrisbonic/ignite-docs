# Ignite Studio — Documentation Site

Published Starlight documentation for the Ignite Studio pitch engine. Covers admin guide, agent reference, architecture, operations, webflow-cloud incident log, runbooks, and roadmap UX reviews.

This is one of four git scopes in the workspace — see the [parent README](../README.md) for the full picture.

---

## Running the docs site

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build to ./dist/
```

## Content layout

```text
src/content/docs/
├── admin-guide/         end-user admin flows
├── agents/              agent pipeline reference
├── architecture/        system design, CMS schema, URL structure
├── operations/          deployment, env config
├── pitch-formula/       the 7-slide formula
├── webflow-cloud/       Webflow Cloud specifics + incident-log.mdx (append-only)
├── runbooks/            operational playbooks
├── roadmap/             active UX reviews (move to _archive/ once shipped)
└── sessions/            per-session shipped manifests
```

## Editing conventions

- Keep frontmatter `title` and `description` intact — users bookmark these.
- `_archive/` folders are frozen history. Do not edit in place.
- The `sync-docs` skill (see `.claude/skills/sync-docs/` in the parent) checks for drift after a feature ships.
- The `ux-review` skill writes to `roadmap/session-{N}-{slug}/index.mdx` before a feature is implemented.

## Deploy

This repo pushes to `chrisbonic/ignite-docs`. Auto-deploy is not currently wired up — build and deploy manually as needed.

---

Starlight docs: <https://starlight.astro.build/>
