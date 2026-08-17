// pages/api/auth/signout.ts
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ cookies }) => {
  // Delete the session cookies across the whole domain
  cookies.delete("__session", { path: "/" });
  cookies.delete("session", { path: "/" });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};