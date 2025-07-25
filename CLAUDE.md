# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Expo React Native application for creating an Instagram-like UI. The project uses:

- Expo SDK 53 with React Native 0.79.5
- TypeScript for type safety
- Expo Router for file-based navigation
- React Navigation for tab navigation

## Common Development Commands

### Running the Application

- `npm start` or `npx expo start` - Start the Expo development server
- `npm run ios` - Start on iOS simulator
- `npm run android` - Start on Android emulator
- `npm run web` - Start on web browser

### Code Quality

- `npm run lint` - Run ESLint to check code quality

### Project Management

- `npm run reset-project` - Moves starter code to app-example directory and creates blank app directory

## Architecture and Project Structure

### Navigation Architecture

The app uses Expo Router with file-based routing:

- `app/_layout.tsx` - Root layout with Stack navigation
- `app/(tabs)/_layout.tsx` - Tab navigation layout with bottom tabs
- `app/(tabs)/index.tsx` - Home tab screen
- `app/(tabs)/explore.tsx` - Explore tab screen
- `app/+not-found.tsx` - 404 error screen

### Styling Approach

- The app is configured for both light and dark themes (userInterfaceStyle: "automatic")
- Custom tab bar styling with black background
- Platform-specific styles using `Platform.select()`

### Key Configuration

- TypeScript configured with strict mode and path aliases (`@/*` maps to root)
- ESLint configured with expo preset
- Fonts loaded using expo-font (SpaceMono font included)

### Component Structure

- `components/ui/` - UI components like IconSymbol for cross-platform icons
- `hooks/` - Custom hooks for theme colors and color scheme detection

### Important Technical Details

- New Architecture enabled (`newArchEnabled: true`)
- Uses React 19.0.0 with React Native's new architecture
- Expo managed workflow with EAS project configured
- Web bundler set to Metro with static output
