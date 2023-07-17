import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQGeEzAckx6q47pbiVuD9JgP8c1CTZ8Zs",
  authDomain: "fir-login-c11b9.firebaseapp.com",
  projectId: "fir-login-c11b9",
  storageBucket: "fir-login-c11b9.appspot.com",
  messagingSenderId: "423365201152",
  appId: "1:423365201152:web:2fc4b6cbc28f88bcbe77e5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
