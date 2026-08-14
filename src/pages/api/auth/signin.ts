import type { APIRoute } from "astro";
import { getAppAuth } from "../../../firebase/server";

export const POST: APIRoute = async ({ request, cookies }) => {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "No token provided" }), { status: 401 });
  }

  const idToken = authHeader.split("Bearer ")[1];
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days session cookie

  try {
    const auth = getAppAuth();
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
    cookies.set("__session", sessionCookie, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: expiresIn / 1000,
    });

    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Unauthorized request" }), { status: 401 });
  }
};