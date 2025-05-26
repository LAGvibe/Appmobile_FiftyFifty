---
applyTo: '**'
---

# 50/50 App Architecture

## Project Overview
50/50 is a React Native mobile application built with Expo that helps couples share household tasks and manage their home together. The app uses Firebase for authentication and data storage.

## Technology Stack
- **Frontend**: React Native with Expo
- **UI Library**: NativeWind (with Tailwind CSS)
- **Routing**: Expo Router (file-based routing)
- **Authentication**: Firebase Authentication (JS SDK v10.5.2)
- **Database**: Firebase Firestore (JS SDK)
- **Language**: TypeScript
- **State Management**: Zustand
- **Build Tools**: Metro with NativeWind integration
- **Code Quality**: ESLint + Prettier

## Project Structure

```
fiftyfifty/
├── .env                          # Environment variables (Firebase config, ignored)
├── .gitignore                    # Git ignore patterns
├── .github/                      # GitHub configuration
│   ├── copilot-instructions.md  # General coding guidelines
│   └── instructions/             # AI coding instructions
│       └── architecture.instructions.md  # Project architecture documentation
├── app.json                      # Expo configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration with JSX support
├── babel.config.js               # Babel configuration with NativeWind preset
├── metro.config.js               # Metro bundler configuration with NativeWind
├── tailwind.config.js            # Tailwind CSS configuration
├── global.css                    # Global CSS with Tailwind directives
├── prettier.config.js            # Prettier formatting configuration
├── eslint.config.js              # ESLint configuration with Expo preset
├── cesconfig.json                # CES (Create Expo Stack) configuration
├── nativewind-env.d.ts           # NativeWind TypeScript definitions
├── app-env.d.ts                  # Additional TypeScript environment definitions
├── expo-env.d.ts                 # Expo TypeScript definitions
│
├── app/                          # Main application code (Expo Router)
│   ├── _layout.tsx              # Root layout configuration with auth initialization
│   ├── index.tsx                # Landing screen with routing logic
│   ├── auth/                    # Authentication module
│   │   ├── _layout.tsx         # Auth layout configuration
│   │   └── index.tsx           # Login/Register screen
│   ├── protected/               # Protected routes (requires authentication)
│   │   ├── _layout.tsx         # Protected layout with AuthGuard
│   │   ├── index.tsx           # Protected home screen
│   │   └── profile.tsx         # User profile screen
│   ├── details.tsx              # Details screen (demo)
│   ├── +not-found.tsx           # 404 error screen
│   └── +html.tsx                # Web-specific HTML configuration
│
├── components/                   # Reusable UI components
│   ├── Button.tsx               # Custom button component with variants
│   ├── Container.tsx            # Safe area container wrapper with className support
│   ├── AuthGuard.tsx            # Authentication guard component
│   ├── ScreenContent.tsx        # Screen content layout component
│   └── EditScreenInfo.tsx       # Demo information component
│
├── utils/                        # Utility functions and configurations
│   └── firebase.ts             # Firebase SDK initialization and exports
│
├── store/                        # State management
│   ├── authStore.ts             # Zustand authentication store with Firebase integration
│   └── store.ts                 # Zustand store configuration (demo bears state)
│
├── types/                        # TypeScript type definitions
│   └── User.ts                  # User interface definition
│
└── assets/                       # Static assets (referenced in app.json)
    ├── icon.png                 # App icon
    ├── splash.png               # Splash screen image
    ├── favicon.png              # Web favicon
    └── adaptive-icon.png        # Android adaptive icon
```

## Current Architecture State

### Authentication & Security
- **Firebase Auth**: Fully implemented user registration and login system
- **AuthGuard**: Component-based route protection for authenticated users
- **Zustand Store**: Centralized authentication state management with Firebase integration
- **Protected Routes**: Dedicated `/protected` route group requiring authentication
- **Auth Flow**: Automatic redirection between auth and protected areas

### Routing & Navigation
- **Expo Router**: File-based routing system configured with typed routes
- **Route Protection**: AuthGuard component ensures only authenticated users access protected routes
- **Auth Module**: Dedicated `/auth` route for login and registration
- **Protected Module**: Secure `/protected` route group with profile and home screens
- **Error Handling**: 404 not-found screen implementation
- **Web Support**: HTML configuration for web deployment

### UI & Styling
- **NativeWind**: Integrated with Tailwind CSS for utility-first styling
- **Component Library**: Basic reusable components with consistent styling patterns
- **Typography & Layout**: Responsive design patterns using Tailwind classes
- **Safe Areas**: Container component handling safe area insets

### Configuration & Tooling
- **Development Tools**: ESLint and Prettier configured for code quality
- **Build System**: Metro bundler optimized for NativeWind
- **TypeScript**: Strict mode enabled with path aliases support
- **Package Management**: npm with modern React Native and Expo dependencies

### State Management
- **Zustand**: Lightweight state management library
- **Auth Store**: Complete Firebase authentication integration with login, register, logout
- **Auth State**: Real-time authentication state listening and user session management
- **Demo Store**: Basic bears counter implementation (placeholder for future features)

### Firebase Integration (Fully Implemented)
- **Firebase SDK**: v10.5.2 with complete authentication setup
- **Authentication**: User registration, login, logout with email/password
- **Firestore**: Database configured and ready for data operations
- **Auth State**: Real-time authentication state monitoring
- **User Management**: Complete user profile and session management

## Dependencies Overview

### Core Dependencies
- **React Native**: 0.79.2
- **React**: 19.0.0
- **Expo**: ^53.0.9
- **Expo Router**: ~5.0.3

### UI & Styling
- **NativeWind**: latest
- **Tailwind CSS**: ^3.4.0

### State & Data
- **Zustand**: ^4.5.1
- **Firebase**: ^10.5.2

### Development Tools
- **TypeScript**: ~5.8.3
- **ESLint**: ^9.25.1
- **Prettier**: ^3.2.5

## Next Steps for Implementation
1. ✅ **Authentication System**: Complete Firebase Auth with user registration/login
2. ✅ **Route Protection**: AuthGuard component and protected route structure  
3. **Database Models**: Create TypeScript interfaces for Home and Task entities
4. **Core Features**: Implement task management, home sharing functionality
5. **Real-time Updates**: Integrate Firestore for live data synchronization
6. **User Experience**: Add loading states, error handling, and form validation
