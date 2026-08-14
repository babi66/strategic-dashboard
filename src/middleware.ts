import { defineMiddleware } from "astro:middleware";
import { getAppAuth } from "./firebase/server";

export const onRequest = defineMiddleware(async ({ cookies, redirect, url }, next) => {
  const sessionCookie = cookies.get("__session")?.value;

  // Protect all routes starting with /dashboard
  if (url.pathname.startsWith("/dashboard")) {
    if (!sessionCookie) {
      return redirect("/login");
    }

    try {
      const auth = getAppAuth();
      const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
      if (!decodedClaims) {
        return redirect("/login");
      }
    } catch (error) {
      return redirect("/login");
    }
  }

  // Redirect authenticated user away from login page
  if (url.pathname === "/login" && sessionCookie) {
    try {
      const auth = getAppAuth();
      await auth.verifySessionCookie(sessionCookie, true);
      return redirect("/dashboard");
    } catch (e) {
      // Token expired, allow user to access login
    }
  }

  return next();
});