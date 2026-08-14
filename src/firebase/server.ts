import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";
import fs from "node:fs";
import path from "node:path";

function initFirebaseAdmin() {
  if (getApps().length > 0) {
    return getApp();
  }

  const filePath = path.resolve(process.cwd(), "service-account.json");

  if (!fs.existsSync(filePath)) {
    throw new Error("service-account.json file not found in project root directory.");
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const serviceAccount = JSON.parse(fileContent);

    return initializeApp({
      credential: cert(serviceAccount),
    });
  } catch (error: any) {
    console.error("Error reading service-account.json:", error.message);
    throw error;
  }
}

let appAuth: Auth;

try {
  const app = initFirebaseAdmin();
  appAuth = getAuth(app);
} catch (e) {
  appAuth = {} as Auth;
}

export { appAuth };