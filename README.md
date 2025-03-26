# Medical Case Management System

A modern web application built with React, TypeScript, and Vite for managing medical cases and client information.

## Quick Start 🚀

```bash
# Clone the repository
git clone https://github.com/yourusername/medical-case-management.git

# Navigate to project directory
cd medical-case-management

# Install dependencies
npm install

# Create a .env file (optional)
cp .env.example .env

# Start development server
npm run dev
```

Then visit `http://localhost:5173` in your browser.

### Requirements

- Node.js 18.0 or higher
- npm 9.0 or higher

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code
npm run format

# Lint code
npm run lint
```

## Overview

This application helps manage medical cases with features including:

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v6
- **UI Components:**
  - Radix UI (Accessible component primitives)
  - Tailwind CSS (Styling)
  - Shadcn/ui (Component library)
- **Table Management:** TanStack Table
- **Form Handling:** React Hook Form
- **Date Handling:** date-fns
- **Styling Utilities:**
  - clsx
  - tailwind-merge
  - class-variance-authority

## Technical Decisions

### State Management

The application currently doesn't implement any global state management library (like Zustand) since:

- All state is handled locally within components
- No complex state sharing between components is required
- Props drilling is minimal
- Context API is sufficient for theme management

### Testing

Test coverage was not implemented in this phase due to:

- Time constraints in initial development
- Focus on core functionality and UI implementation
