# Luma

Plataforma de aprendizaje impulsada por agentes de inteligencia artificial.

## Stack

- **Next.js 15** + React 19 + TypeScript
- **Tailwind CSS**
- **Supabase** (Auth, Database, Storage)
- **Google GenAI + ADK** (Agentes IA)
- **Zod** (Validación)
- **Zustand** (Estado global)

## Arquitectura Limpia

```
/src
  /modules
    /auth         → Login, registro, sesiones
    /agent        → Agentes IA, conversaciones
    /courses      → Cursos, lecciones, progreso
    /user         → Perfiles, preferencias
  /shared
    /domain       → Entity base, Repository interface
    /application  → Utils cross-module
    /infrastructure → Supabase, GenAI, config, validation
    /presentation → UI components compartidos
```

Cada módulo tiene:
- `domain/` → Entities, repositories (interfaces)
- `application/` → Use cases, DTOs, services (interfaces), factories
- `infrastructure/` → Repositories (impl), API routes, external services
- `presentation/` → Pages, components, hooks, stores

## Setup

1. Copia `.env.local.example` a `.env.local` y completa las variables
2. `npm install`
3. `npm run dev`

## Variables de entorno

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `GOOGLE_GENAI_API_KEY`
