import { defineMiddleware } from "astro:middleware";
import { createSupabaseServerClient } from "./lib/supabase/server";

export const onRequest = defineMiddleware(
  async ({ request, cookies, locals, url, redirect }, next) => {
    const supabase = createSupabaseServerClient({
      request,
      cookies,
    });

    const {
      data: { user },
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