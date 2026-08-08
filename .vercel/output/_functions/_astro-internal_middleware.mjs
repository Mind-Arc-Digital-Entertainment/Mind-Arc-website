import { d as defineMiddleware, s as sequence } from './chunks/index_C9b4aNxF.mjs';
import { createServerClient, parseCookieHeader } from '@supabase/ssr';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BJvlWC8q.mjs';
import 'piccolore';
import './chunks/astro/server_CvNkiJ_b.mjs';
import 'clsx';

function createSupabaseServerClient({
  request,
  cookies
}) {
  return createServerClient(
    "https://brfyokjofjtdbbcclhod.supabase.co",
    "sb_publishable_JqcVO3Wp7RQmQ5L48XAGgw_QqoCs6y8",
    {
      cookies: {
        getAll() {
          return parseCookieHeader(
            request.headers.get("Cookie") ?? ""
          );
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookies.set(name, value, options);
          });
        }
      }
    }
  );
}

const onRequest$1 = defineMiddleware(
  async ({ request, cookies, locals, url, redirect }, next) => {
    const supabase = createSupabaseServerClient({
      request,
      cookies
    });
    const {
      data: { user }
    } = await supabase.auth.getUser();
    locals.supabase = supabase;
    locals.user = user;
    const isProtectedRoute = url.pathname.startsWith("/account/profile");
    if (isProtectedRoute && !user) {
      return redirect("/account/login");
    }
    return next();
  }
);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
