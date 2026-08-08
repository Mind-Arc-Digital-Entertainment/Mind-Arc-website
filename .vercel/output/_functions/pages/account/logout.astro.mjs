export { renderers } from '../../renderers.mjs';

const POST = async ({ locals, redirect }) => {
  const { error } = await locals.supabase.auth.signOut();
  if (error) {
    console.error("Logout failed:", error.message);
    return redirect("/?error=logout-failed");
  }
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
