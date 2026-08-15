import type { APIRoute } from "astro";
import { getAppAuth } from "../../../firebase/server";

export const prerender = false; // Ensures server-side handling on Vercel

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const auth = getAppAuth();
    const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];

    if (!idToken) {
      return new Response(JSON.stringify({ error: "No token provided" }), {
        status: 401,
      });
    }

    // Create session cookie (5 days duration)
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });

    cookies.set("__session", sessionCookie, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: expiresIn / 1000,
    });

    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};