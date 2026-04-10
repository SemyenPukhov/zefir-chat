# flymer

Monorepo managed with [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces) and [Turborepo](https://turbo.build/).

## Apps

| Package        | Description        |
| -------------- | ------------------ |
| `apps/landing` | Next.js marketing site |

## Commands (from repository root)

```bash
npm install
npm run dev    # turbo run dev — all apps with a dev task
npm run build
npm run lint
```

Run a single workspace:

```bash
npm run dev -w landing
npm run build -w landing
```

Edit the landing app under `apps/landing/src/`.

## Deploy on Vercel

Create or open the Vercel project and set **Root Directory** to `apps/landing` so install and build run from the Next.js package. Install command can stay `npm install` at the repo root (Vercel detects workspaces), or use the default.

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for build settings.
