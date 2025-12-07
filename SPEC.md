# SensorAI – Project Specification

## Overview
SensorAI is a real‑time motion‑tracking application that uses the webcam to capture facial expressions, body pose, and hand gestures. The project now runs on **TypeScript**, providing strong type safety across all components.

## Core Features
- **Webcam Capture** – Displays live video with an overlay canvas for visualizing landmarks.
- **Facial Blendshapes** – Maps MediaPipe blendshape data to a 3D avatar, mirroring left/right expressions.
- **Body & Limb Tracking** – Animates the avatar’s torso, arms, and legs based on pose landmarks.
- **Hand Pose** – Renders individual finger rotations for both hands.
- **Scene Selection** – Pre‑defined environments (e.g., apartment, city, forest) selectable via UI.
- **Responsive Controls** – Floating buttons to toggle camera visibility and switch scenes.

## Architecture
- **Next.js (v14)** – Handles server‑side rendering and routing.
- **React Three Fiber & Drei** – Provides the 3D scene graph and helper utilities.
- **MediaPipe Holistic** – Supplies facial, pose, and hand landmarks.
- **TypeScript** – All source files are now `.ts/.tsx`, with explicit typings for props and utility functions.
- **Tailwind CSS** – Utility‑first styling for UI components.

## Directory Structure
```
webcam/
├─ src/
│  ├─ app/                # Next.js pages & layout
│  │   └─ layout.tsx      # Root layout component
│  ├─ components/
│  │   ├─ avatar.tsx
│  │   ├─ camera.tsx
│  │   ├─ controls.tsx
│  │   └─ social.tsx
│  ├─ utils/
│  │   ├─ constants.ts
│  │   └─ solver.ts       # Core animation & pose calculations
│  └─ styles/             # Tailwind and global CSS
├─ public/                 # Static assets (icons, models)
├─ .eslintrc.json          # ESLint configuration (Next.js core‑web‑vitals)
├─ next.config.js          # Disables linting during production builds
├─ tsconfig.json           # TypeScript compiler options (strict mode)
└─ README.md               # Project overview and build instructions
```

## Technical Decisions & Challenges
- **Type Migration** – Replaced all JavaScript files with TypeScript equivalents, adding minimal type definitions where external libraries lacked typings.
- **ESLint Compatibility** – Upgraded to ESLint 9 and disabled linting during production builds to avoid legacy option errors.
- **Layout Import Issues** – Resolved module‑resolution problems by providing a proper `layout.tsx` component and a declaration file for the legacy JavaScript layout.

## Testing & Validation
- Run `npm run dev` for hot‑reloading development mode.
- Execute `npm run build && npm start` to verify a production‑ready bundle.
- Type checking is enforced via `npx tsc --noEmit`; the project compiles without errors.

## Future Work
- **Production Deployment** – Containerize the app (Docker) and deploy to Vercel or similar platforms.
- **Performance Optimizations** – Implement lazy loading for 3D assets and reduce bundle size with code‑splitting.
- **Extended Tracking** – Add support for multiple simultaneous users and integrate additional MediaPipe solutions (e.g., object detection).

---

*This specification reflects the current state of the SensorAI project after migration to TypeScript and resolution of build issues.*