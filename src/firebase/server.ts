import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export function getAppAuth() {
  if (getApps().length === 0) {
    // Check import.meta.env first (Astro/Vite dev), then fallback to process.env (Vercel)
    const projectId =
      import.meta.env.FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID;
    const clientEmail =
      import.meta.env.FIREBASE_CLIENT_EMAIL || process.env.FIREBASE_CLIENT_EMAIL;
    const rawKey =
      import.meta.env.FIREBASE_PRIVATE_KEY || process.env.FIREBASE_PRIVATE_KEY;

    const privateKey = rawKey
      ? rawKey.replace(/\\n/g, "\n").replace(/^"(.*)"$/, "$1")
      : undefined;

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error(
        `Missing Firebase Admin variables. Received: projectId=${!!projectId}, clientEmail=${!!clientEmail}, privateKey=${!!privateKey}`
      );
    }

    initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  }

  return getAuth(getApp());
}