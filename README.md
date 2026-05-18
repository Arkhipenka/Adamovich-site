# Ales Adamovich Site

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The localized homepage is available at [http://localhost:3000/ru](http://localhost:3000/ru).

## GitHub Pages

The project is configured for static export with GitHub Pages:

- `next.config.ts` uses `output: "export"`, `trailingSlash: true`, and unoptimized images.
- `.github/workflows/deploy-pages.yml` builds the static site and deploys the `out` directory through GitHub Actions.
- `NEXT_PUBLIC_BASE_PATH` is set automatically in the workflow for project pages, for example `/adamovich`.
- For a user or organization Pages repository named `<owner>.github.io`, the workflow leaves `NEXT_PUBLIC_BASE_PATH` empty.

To publish:

1. Push the repository to GitHub.
2. Open repository settings: **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or `master`, or run the workflow manually from the **Actions** tab.

Local checks:

```bash
npm run typecheck
npm run lint
npm run build
```

The static export is generated into `out/`.
