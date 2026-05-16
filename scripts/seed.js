import admin from 'firebase-admin';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Note: Ensure you have downloaded your Firebase Service Account JSON key
// and set the environment variable:
// export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/serviceAccountKey.json"

// Import data
import { BBQ_DATA, LAB_DATA, SHOP_ITEMS, RECIPES, METHOD_LEGEND } from '../src/data/kettleData.js';

const APP_ID = 'kettle-master-v1';

async function seed() {
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error("❌ ERROR: GOOGLE_APPLICATION_CREDENTIALS environment variable is missing.");
    console.error("Please download your service account key from Firebase Console -> Project Settings -> Service Accounts.");
    console.error("Then run: export GOOGLE_APPLICATION_CREDENTIALS=\"/path/to/key.json\"");
    process.exit(1);
  }

  admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });

  const db = admin.firestore();
  console.log("🔥 Connected to Firestore. Starting seeding...");

  const batch = db.batch();

  // Helper to add documents to batch
  const addToBatch = (collectionName, dataArray, idField = 'id') => {
    console.log(`Preparing ${dataArray.length} items for ${collectionName}...`);
    dataArray.forEach(item => {
      // Path must be collection/doc/collection/doc...
      // artifacts (col) / appId (doc) / collectionName (col) / id (doc)
      const docRef = db.doc(`artifacts/${APP_ID}/${collectionName}/${item[idField]}`);
      batch.set(docRef, item);
    });
  };

  // 1. BBQ DATA (Products/Grill items)
  addToBatch('products', BBQ_DATA);

  // 2. SHOP ITEMS
  addToBatch('shop_items', SHOP_ITEMS);

  // 3. RECIPES
  addToBatch('recipes', RECIPES);

  // 4. METHOD LEGEND
  // METHOD_LEGEND doesn't have an ID, we'll use the label as ID
  const formattedMethods = METHOD_LEGEND.map(m => ({
    ...m,
    id: m.label.toLowerCase().replace(/[^a-z0-9]/g, '_')
  }));
  addToBatch('methods', formattedMethods);

  // 5. LAB DATA (Object to Array conversion)
  const labDataArray = Object.keys(LAB_DATA).map(key => ({
    id: key,
    ...LAB_DATA[key]
  }));
  addToBatch('lab_data', labDataArray);

  try {
    await batch.commit();
    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error during seeding:", error);
  }
}

seed();
