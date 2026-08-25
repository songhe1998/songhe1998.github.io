# Songhe Wang — Academic Homepage

A single-page academic portfolio for Songhe Wang, built with React and vinext and exported as a static site for GitHub Pages.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and verify

```bash
npm run build
npm test
```

The static site is generated in `dist/client`.

## Content updates

- Homepage content: `app/page.tsx`
- Visual styling: `app/globals.css`
- Site metadata: `app/layout.tsx`
- CV download: `public/Songhe_Wang_CV.pdf`
- Profile photo and publication thumbnails: `public/`

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and publishes the site whenever `main` is updated. In the repository settings, Pages should use **GitHub Actions** as its source.
