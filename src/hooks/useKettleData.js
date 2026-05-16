import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db, appId } from './useFirebase';

export function useKettleData() {
  const [data, setData] = useState({
    products: [],
    recipes: [],
    shop_items: [],
    methods: [],
    lab_data: {}
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      console.warn("Firestore not initialized, cannot load dynamic data.");
      setLoading(false);
      return;
    }

    const collections = ['products', 'recipes', 'shop_items', 'methods', 'lab_data'];
    const unsubscribes = [];
    let loadedCount = 0;
    // We use a set to track which collections have loaded their initial state
    const loadedCollections = new Set();

    collections.forEach(colName => {
      const colRef = collection(db, 'artifacts', appId, colName);
      const unsub = onSnapshot(colRef, (snapshot) => {
        const items = snapshot.docs.map(doc => {
          // If the document has its own 'id' field, we don't overwrite it
          const data = doc.data();
          return { ...data, id: data.id || doc.id };
        });
        
        setData(prev => {
          const newData = { ...prev };
          if (colName === 'lab_data') {
            // Convert array back to object format expected by the UI
            const labObj = {};
            items.forEach(item => {
              const { id, ...rest } = item;
              labObj[id] = rest;
            });
            newData[colName] = labObj;
          } else {
            newData[colName] = items;
          }
          return newData;
        });

        if (!loadedCollections.has(colName)) {
          loadedCollections.add(colName);
          if (loadedCollections.size === collections.length) {
            setLoading(false);
          }
        }
      }, (error) => {
        console.error(`Error loading ${colName}:`, error);
        if (!loadedCollections.has(colName)) {
          loadedCollections.add(colName);
          if (loadedCollections.size === collections.length) {
            setLoading(false);
          }
        }
      });
      unsubscribes.push(unsub);
    });

    return () => {
      unsubscribes.forEach(unsub => unsub());
    };
  }, []);

  return { ...data, loading };
}
