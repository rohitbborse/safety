# VideoSafety Dashboard

## Overview

This is a React TypeScript web application for a video safety monitoring dashboard. The application appears to be designed for fleet/workplace safety management, providing real-time monitoring of traffic incidents, phone usage violations, and PPE (Personal Protective Equipment) compliance. The dashboard displays alerts, statistics, and allows users to review safety-related incidents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React 18 with TypeScript for type-safe component development
- **Build Tool**: Vite 3 for fast development with Hot Module Reloading (HMR)
- **Styling**: CSS with inline Tailwind-style utility classes for component styling
- **Icons**: Lucide React for consistent iconography throughout the UI

### Project Structure

```
src/
├── App.tsx        # Main application component with dashboard UI
├── App.css        # Application styles
└── index.tsx      # React entry point
```

### Design Patterns

- **Single Page Application (SPA)**: Client-side rendered React application
- **Component-Based Architecture**: UI built from reusable React components
- **State Management**: React's built-in useState hook for local component state

### Configuration

- **TypeScript**: Strict mode enabled with ESNext target
- **Vite**: Configured to serve on all network interfaces (host: '0.0.0.0') for Replit compatibility

## External Dependencies

### Runtime Dependencies

| Package | Purpose |
|---------|---------|
| lucide-react | Icon library for UI elements |

### Development Dependencies

| Package | Purpose |
|---------|---------|
| react / react-dom | Core React framework |
| typescript | Type checking and compilation |
| vite | Build tool and dev server |
| @vitejs/plugin-react | React support for Vite |
| @types/react / @types/react-dom | TypeScript definitions for React |

### External Services

Currently, the application is frontend-only with no backend services or database integrations. The data displayed (widgets, alerts) is hardcoded in the component. Future development may require:

- Backend API for real-time alert data
- Database for storing incidents and user information
- Authentication service for user management