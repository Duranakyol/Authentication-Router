import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCanv1RMghe4Gt662fntR9_aAzXEv1ng4A",
  authDomain: "products-4ca00.firebaseapp.com",
  projectId: "products-4ca00",
  storageBucket: "products-4ca00.appspot.com",
  messagingSenderId: "1068489207900",
  appId: "1:1068489207900:web:c6742d2e6f40334c543699",
  measurementId: "G-Z1JFWDBGPW",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);

export const signUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth, { displayName: name });
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
