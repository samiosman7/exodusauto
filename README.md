# Cold Caller Website Engine

Backend-first starter for a tool that helps salespeople:

- store lead campaigns
- save qualified local-business leads
- generate website demo content with Mistral
- generate cold-call scripts
- publish public live demo links at `/demo/[slug]`

## Stack

- Next.js App Router
- Prisma 7
- Supabase Postgres
- Supabase server client
- Mistral API
- Zod validation

## Environment

Copy `.env.example` to `.env.local` and fill in the real values.

Important:
- replace the placeholder database password in `DATABASE_URL`
- replace the placeholder database password in `DIRECT_URL`
- use your real `SUPABASE_SERVICE_ROLE_KEY`
- use your real `MISTRAL_API_KEY`

## Install

```powershell
npm install
```

## Generate Prisma Client

```powershell
npm run prisma:generate
```

## Run the First Migration

After your real Supabase database password is in `.env.local`, run:

```powershell
npm run prisma:migrate -- --name init
```

## Start the App

```powershell
npm run dev
```

Open:

- `http://localhost:3000`
- `http://localhost:3000/demo/[slug]` for public demo links

## Implemented Routes

- `POST /api/campaigns`
- `POST /api/leads`
- `POST /api/demos/generate`
- `POST /api/scripts/generate`
- `GET /demo/[slug]`

## Suggested First Test Flow

1. Create a campaign with `POST /api/campaigns`
2. Create a lead with `POST /api/leads`
3. Generate a demo with `POST /api/demos/generate`
4. Open the demo link returned in `publicUrl`
5. Generate a script with `POST /api/scripts/generate`

## Notes

- Prisma is configured through `prisma.config.ts`, which is the Prisma 7 pattern.
- The app currently uses `DIRECT_URL` for Prisma connections to keep setup simple.
- Batch generation is intentionally not included yet.
- Auth is not wired yet.
