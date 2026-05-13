# Deploying to AWS Amplify Hosting

This project is configured for AWS Amplify Hosting via `amplify.yml` (build spec) and `customHttp.yml` (caching + security headers).

## One-time setup

1. Sign in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/) in your target region.
2. Click **New app → Host web app**.
3. Choose **GitHub** as the source provider and authorise Amplify to access your repo.
4. Select the repo `bhavik-bansal-csc-ak/sharkninja-synthetic-personas-prototype` and the branch you want to deploy (typically `main`).
5. **App settings → Build settings**: Amplify should auto-detect the `amplify.yml` at the repo root. If not, paste the contents of `amplify.yml`.
6. **App settings → Environment variables**: nothing required for this build.
7. **Rewrites and redirects** (critical for React Router):
   - Click **Add rule** and configure exactly:
     - **Source address**: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>`
     - **Target address**: `/index.html`
     - **Type**: `200 (Rewrite)`
   - This makes Amplify serve `index.html` for any URL that isn't a static asset, so client-side routes like `/simulations/C-2041` and `/personas/isabel-morales` work on direct visit and refresh.
8. Click **Save and deploy**.

## What runs on each push

```yaml
preBuild  → npm ci --cache .npm --prefer-offline   # reproducible install, cached between builds
build     → npm run build                          # vite build → outputs to /dist
artifacts → dist/**/*                              # everything Amplify uploads to CDN
```

A clean build typically takes 60–90 seconds; warm builds (with `node_modules` cache hit) drop to ~25 seconds.

## Local dry-run before pushing

```bash
npm ci
npm run build
npm run preview   # serves the built bundle on http://localhost:4173
```

If `npm run build` succeeds and `npm run preview` loads at the previewed URL, Amplify will succeed too.

## Custom domain

To attach a custom domain (e.g. `personasim.armakuni.com`):

1. Amplify Console → **App settings → Domain management → Add domain**.
2. Enter the apex domain or subdomain. Amplify will provision an ACM certificate and prompt for two DNS records (one CNAME for the subdomain, one for the SSL validation).
3. Add those records at your registrar (Route 53, Cloudflare, etc.). Propagation usually completes in 10–20 minutes.

## Cache headers

`customHttp.yml` sets:

- `/assets/**/*` → immutable 1-year cache (Vite already content-hashes these files).
- `/index.html` → `no-cache` so users always get the latest router shell.
- Site-wide HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy security headers.

## Troubleshooting

- **`npm ci` fails**: check `package-lock.json` is committed. If not, run `npm install` locally first and commit the lockfile.
- **Refresh on `/simulations` shows a 404**: the SPA rewrite rule (step 7 above) is missing.
- **`vite: not found`** during build: Amplify uses the `package.json` scripts. Make sure `vite` is in `devDependencies` (it is) and that the `build` script is `vite build` (it is).
- **Audit warning about esbuild**: already addressed — Vite is pinned to `^7.0.0` which ships with esbuild ≥ 0.25.
