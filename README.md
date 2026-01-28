# High-End Auth System

A premium, production-ready Authentication System built with React, Vite, and modern UI libraries.

## Features
- **Role-Based Access Control**: Separate areas for Admin and User.
- **3D Background**: Interactive holographic orb and particles using React Three Fiber.
- **Glassmorphism UI**: High-quality frosted glass effects with standard shadcn/ui components.
- **Security**: Password strength meter, protected routes, and role gates.
- **Tech Stack**:
  - React + Vite
  - Tailwind CSS + Framer Motion
  - Zustand (State Management)
  - React Query (Data Fetching)
  - React Hook Form + Zod

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Mock Credentials**
   - **Admin**: `admin@example.com` / `Admin@1234`
   - **User**: `user@example.com` / `User@1234`

## Project Structure
- `/src/features/auth`: Core auth logic (forms, store).
- `/src/components/3d`: 3D scene configuration.
- `/src/layouts`: Split-screen auth layout.
