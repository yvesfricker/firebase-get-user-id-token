import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { config } from "dotenv";

// Load environment variables
config();

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function getUserIDToken(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user) {
      const idToken = await getIdToken(user);
      console.log("User ID Token: ", idToken);
    }
  } catch (error) {
    console.error("Error logging in with email and password: ", error);
  }
}

// Get email and password from command line arguments
const email = process.argv[2];
const password = process.argv[3];

getUserIDToken(email, password);
