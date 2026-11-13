import type { SupabaseClient, User } from "@supabase/supabase-js";
import type { AstroCookies } from "astro";

type AssaultAuthentication = { supabase: SupabaseClient; user: User };

/** Website/WebGL Assault routes are read-only. Persistent gameplay uses the Android broker/RPC protocol.
 * Keep this fail-closed boundary for legacy routes so no cookie or supplied bearer can authorize a write.
 * General website account authentication is separate and unchanged.
 */
export async function authenticateAssaultApi(_context: {
  request: Request;
  cookies: AstroCookies;
}): Promise<AssaultAuthentication | null> {
  return null;
}
