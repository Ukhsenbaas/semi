import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDlPm8aGM1RyQwG1SkpMM2JztvrU4Gumu8",
  authDomain: "github-action-b3f15.firebaseapp.com",
  projectId: "github-action-b3f15",
  storageBucket: "github-action-b3f15.appspot.com",
  messagingSenderId: "543670318062",
  appId: "1:543670318062:web:8f7e4457573ec22b0094ff",
  measurementId: "G-YRGPGQN80T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export const useCollection = (path) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, path)), (snapshot) => {
      const da = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setData(da);
    });
    return () => unsubscribe();
  }, [path]);

  // add function

  return {
    data,
    //add
  };
};