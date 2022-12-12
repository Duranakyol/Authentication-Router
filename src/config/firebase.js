import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
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
export const db = getFirestore(app);

const productsRef = collection(db, "products");

export const useProductLister = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    return onSnapshot(productsRef, (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data, createdAt: data.createdAt?.toDate() };
        })
      );
    });
  }, []);
  return products;
};

export const deleteProduct = (id) => {
  deleteDoc(doc(db, "products", id));
};

export const addProduct = () => {
  const uid = auth.currentUser?.uid;
  if (!uid) return;
  addDoc(productsRef, {
    name: "Xiaomi",
    description: "108 MP Kamera",
    price: "700 €",
    uid,
  });
};
