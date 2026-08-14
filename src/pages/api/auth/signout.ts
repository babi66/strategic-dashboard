// pages/api/auth/signout.ts
import type { APIRoute } from "astro";

export const ALL: APIRoute = async ({ cookies, redirect }) => {
  // Delete the session cookie across the whole domain
  cookies.delete("__session", { path: "/" });
  cookies.delete("session", { path: "/" }); // Backup check

  return redirect("/login");
};