# Three Ten International - Organic Agricultural Products Platform

## Overview

Three Ten International is a business-to-business agricultural export platform that connects Indian organic farmers with US supply chains. The application serves as a comprehensive showcase and quote request system for premium organic agricultural products including soybean meal, lecithin products, grains, and oils. The platform emphasizes transparency, quality assurance, and traceability from farm to facility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Storage Pattern**: Repository pattern with in-memory fallback storage for development

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database for production
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema Management**: Shared schema definitions between client and server using Zod
- **Development Storage**: In-memory storage implementation for development and testing

### Authentication and Authorization
- **Current State**: No authentication system implemented
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (configured but not actively used)
- **Security**: Basic Express middleware for request logging and error handling

### API Architecture
- **Pattern**: RESTful API design
- **Endpoints**: 
  - POST /api/quote-requests - Create new quote requests
  - GET /api/quote-requests - Retrieve all quote requests
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error middleware with structured error responses

### External Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS with custom design system variables
- **Development Tools**: Replit-specific plugins for development environment integration
- **Form Validation**: Zod for runtime type validation and schema generation
- **Date Handling**: date-fns for date manipulation utilities

The application follows a monorepo structure with shared TypeScript definitions, enabling type safety across the full stack. The architecture supports both development (with in-memory storage) and production (with PostgreSQL) environments through configurable storage implementations.