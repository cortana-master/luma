# Tarea: Convertir Landing Page B2B a Next.js + React + Tailwind

## Contexto
Estamos construyendo Luma — una plataforma de aprendizaje B2B multi-tenant para colegios, universidades y empresas.

## Archivo fuente
El diseño está en `.stitch/designs/landing_v2_v2.html`. Es un HTML estático generado por Stitch con Tailwind CDN.

## Stack objetivo
- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React (para iconos, NO Material Symbols)
- Componentes en `src/shared/presentation/components/`

## Requisitos
1. Extraer el HTML y convertirlo a JSX limpio
2. Reemplazar todos los `material-symbols-outlined` por iconos equivalentes de `lucide-react`
3. Las imágenes externas (Google URLs) reemplazarlas por placeholders o divs con gradientes
4. El logo reemplazarlo por texto "Luma" o un div estilizado
5. Mantener la paleta de colores: primary `#2d6a4f`, surface `#ffffff`, etc.
6. Hacer los componentes responsivos (mobile-first)
7. Extraer componentes reutilizables: Button, Card, SectionHeader, etc.
8. La página debe estar en `src/app/page.tsx`

## Estructura de componentes sugerida
- `src/shared/presentation/components/Button.tsx` (ya existe)
- `src/shared/presentation/components/Card.tsx`
- `src/shared/presentation/components/SectionHeader.tsx`
- `src/shared/presentation/components/Navbar.tsx`
- `src/shared/presentation/components/Footer.tsx`
- `src/app/page.tsx` (landing page)
- `src/app/sections/HeroSection.tsx`
- `src/app/sections/TrustBadges.tsx`
- `src/app/sections/SolutionsSection.tsx`
- `src/app/sections/HowItWorks.tsx`
- `src/app/sections/FeaturesSection.tsx`
- `src/app/sections/TestimonialsSection.tsx`
- `src/app/sections/PricingSection.tsx`
- `src/app/sections/CTASection.tsx`

## Notas
- NO usar `class-variance-authority` para componentes simples, solo para Button que ya existe
- Usar `cn()` utility para merge de clases
- Todas las secciones deben ser Server Components salvo las que necesiten interactividad
- Los botones de "Solicitar demo" deben linkear a `/register`
- Los botones de "Acceso instituciones" deben linkear a `/login`
