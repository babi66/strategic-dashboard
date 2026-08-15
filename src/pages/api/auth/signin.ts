import type { APIRoute } from "astro";
import { getAppAuth } from "../../../firebase/server";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const auth = getAppAuth();
    const authorization = request.headers.get("Authorization");
    const idToken = authorization?.split("Bearer ")[1];

    if (!idToken) {
      return new Response(JSON.stringify({ error: "No token provided" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });

    cookies.set("__session", sessionCookie, {
      path: "/",
      httpOnly: true,
      secure: import.meta.env.PROD, // Only enforce HTTPS in production
      sameSite: "lax",
      maxAge: expiresIn / 1000,
    });

    return new Response(JSON.stringify({ status: "success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("--- FIREBASE ADMIN ERROR ---", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};