import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8w29eP_B6iqhsM-JQ6m71xLUoDKRSKEk",
  authDomain: "chat-14a29.firebaseapp.com",
  projectId: "chat-14a29",
  storageBucket: "chat-14a29.appspot.com",
  messagingSenderId: "160705291596",
  appId: "1:160705291596:web:c0c50d50f0f309f1e3dbe9",
  measurementId: "G-L6R87CVRSK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);