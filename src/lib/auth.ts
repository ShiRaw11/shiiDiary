import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export const getUser = async ()=>{
const auth = getSupabaseAuth()
const user = (await auth.getUser()).data.user

if (!user) redirect("/")

    return user
}


export function getSupabaseAuth() {
  const cookieStore = cookies()

  const supabaseClient=createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
           
          }
        },
      },
    }
  )
  return supabaseClient.auth;
}