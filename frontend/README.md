# Frontend (Next.js + Tailwind)

## Setup

```bash
cd frontend
npm install
```

## Development

```bash
npm run dev
```

- App runs on http://localhost:3000
- Add your resume to `public/resume.pdf` (placeholder allowed)

## Build

```bash
npm run build && npm start
```

## Deploy (Vercel)

- Push repo to GitHub
- Import `frontend/` in Vercel
- Set env var `NEXT_PUBLIC_API_BASE` to your backend URL (e.g., https://your-backend.onrender.com)
- Use default build command and output

