# Nextjs 16 App Router + Sanity Starter Kit

<img src="public/images/preview/screenshot-presentation-mode.png" alt="Preview of Sanity Presentation Tab" width="600" />

## Features

- Next.js - This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS v4](https://tailwindcss.com) and [Headless UI v2](https://headlessui.dev/)
- Linter with [ESLint](https://eslint.org)
- Code Formatter with [Prettier](https://prettier.io)
- [FontAwesome](https://fontawesome.com/icons) - Free Solid and Regular icon libraries
- [Sanity](https://www.sanity.io/) - Content managment system
  - Integrated Sanity Studio embeded in the Next js project
  - Configured for Presentation Mode and Live editing

### Requirements

[Node](https://nodejs.org/en/) 20.19.0 and npm
Recommend installing with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```shell
nvm install
nvm use
```
## Getting Started

You'll need a Sanity account as well as a Sanity project To get started. Requires `.env` variables.

```
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_SANITY_STUDIO_URL="http://localhost:3000/studio"

NEXT_PUBLIC_SANITY_PROJECT_ID=""
NEXT_PUBLIC_SANITY_DATASET="production"

SANITY_API_READ_TOKEN=
```

<img src="public/images/preview/screenshot-sanity-dashboard.png" alt="Preview of Sanity Dashboard API Tab" width="600" />

You'll need a `projectId` and `apiToken` to get this up and running. Don't forget to add the CORS origin for localhost and the actual project URL. Once you spin up a project, remember to add `post` documents in Studio to test.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to launch local dev.  
Open [http://localhost:3000/studio](http://localhost:3000/studio) to open local Sanity Studio.

You can start editing the page by modifying `app/(page)/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Inter](https://fonts.google.com/specimen/Inter).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
