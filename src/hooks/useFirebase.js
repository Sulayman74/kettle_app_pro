import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';

let app;
let auth;
export let db;
export const appId = typeof window !== 'undefined' && window.__app_id ? window.__app_id : 'kettle-master-v1';

try {
  // Check for Vite env variables first, then fallback to window injection
  let config = {};
  if (import.meta.env && import.meta.env.VITE_FIREBASE_API_KEY) {
    config = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID
    };
  } else if (typeof window !== 'undefined' && window.__firebase_config) {
    config = JSON.parse(window.__firebase_config);
  }

  if (Object.keys(config).length > 0) {
    app = initializeApp(config);
    auth = getAuth(app);
    db = getFirestore(app);
  } else {
    console.warn("Firebase config is missing. Authentication and Firestore will not work.");
  }
} catch (e) {
  console.error("Firebase initialization failed", e);
}

export function useFirebase() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!auth) return;
    
    const initAuth = async () => {
      try {
        if (typeof window !== 'undefined' && window.__initial_auth_token) {
          await signInWithCustomToken(auth, window.__initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) { 
        console.error("Auth Error", err); 
      }
    };
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user || !db) return;
    const favRef = collection(db, 'artifacts', appId, 'users', user.uid, 'favorites');
    const unsub = onSnapshot(favRef, (snap) => {
      setFavorites(snap.docs.filter(d => d.data().active).map(doc => doc.id));
    });
    return () => unsub();
  }, [user]);

  const toggleFavorite = async (itemId) => {
    if (!user || !db) return;
    const docRef = doc(db, 'artifacts', appId, 'users', user.uid, 'favorites', itemId.toString());
    const isFav = favorites.includes(itemId.toString());
    try {
      await setDoc(docRef, { savedAt: Date.now(), active: !isFav });
    } catch(e) {
      console.error("Error toggling favorite", e);
    }
  };

  return { user, favorites, toggleFavorite };
}
