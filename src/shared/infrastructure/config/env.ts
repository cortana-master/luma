export const env = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    serviceRole: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  },
  google: {
    apiKey: process.env.GOOGLE_GENAI_API_KEY!,
  },
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
}
