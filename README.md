# SensorAI

- Motion tracker works on your webcam

## Project Structure (TypeScript)

```
webcam/
├─ src/
│  ├─ app/                # Next.js pages & layout
│  │   └─ layout.tsx      # Application layout (TSX)
│  ├─ components/
│  │   ├─ avatar.tsx
│  │   ├─ camera.tsx
│  │   ├─ controls.tsx
│  │   └─ social.tsx
│  ├─ utils/
│  │   ├─ constants.ts
│  │   └─ solver.ts
│  └─ styles/ (Tailwind & global CSS)
├─ public/                 # Static assets
├─ .eslintrc.json          # ESLint config (extends next/core-web-vitals)
├─ next.config.js          # Disables ESLint during production builds
├─ tsconfig.json           # TypeScript configuration for strict mode
└─ README.md               # This file
```

## Build & Run

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build (ESLint disabled for the build step)
npm run build
npm start
```

The codebase has been fully migrated from **.js** to **.ts/.tsx**, with type‑safe components, utilities, and a working TypeScript configuration.
