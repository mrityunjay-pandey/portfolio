# Mrityunjay Pandey — Portfolio (Monorepo)

This monorepo contains a Next.js frontend and an Express.js backend for a professional, modular portfolio aimed at internship applications.

- Frontend: `frontend/` (Next.js pages router, Tailwind CSS)
- Backend: `backend/` (Express, MongoDB via Mongoose, JWT auth)

See `frontend/README.md` and `backend/README.md` for service-specific instructions.

## Quick start

- Add `frontend/public/resume.pdf` (placeholder for now)
- Install and run each app as described in their READMEs

## Environments

Backend requires: `MONGO_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `ADMIN_EMAIL` (optional), `PORT`.

Refer to `backend/config/env.example`.

