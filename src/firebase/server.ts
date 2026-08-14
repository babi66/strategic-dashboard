// src/firebase/server.ts
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const activeApps = getApps();

// Handle line breaks in Vercel's private key format
const privateKey = process.env.FIREBASE_PRIVATE_KEY
  ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
  : undefined;

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: privateKey,
};

// Initialize Firebase Admin only if not already initialized
export const app =
  activeApps.length === 0
    ? initializeApp({
        credential: cert(serviceAccount),
      })
    : activeApps[0];

export const serverAuth = getAuth(app);