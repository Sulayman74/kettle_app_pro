---
name: react-firebase-expert
description: Développer et auditer des composants React en JSX utilisant l'écosystème Firebase (Auth, Firestore). À utiliser lorsque l'utilisateur demande de créer ou modifier des composants UI, des hooks personnalisés, ou des interactions avec la base de données.
---

# Spécifications React (JSX) & Sécurité Firebase

## Contexte Technologique
- **Framework** : React 18+ (fichiers `.jsx`) avec build system Vite.
- **Styles** : Tailwind CSS (classes utilitaires conditionnelles prioritaires).
- **Backend** : Firebase Web SDK v10+ (Firestore, Authentication anonyme et authentifiée).

## 1. Principes d'Architecture & Best Practices JSX

### Séparation des Responsabilités (Hooks vs UI)
- **Règle** : Ne jamais écrire de requêtes Firestore directes au sein d'un composant de rendu UI (ex: `GrillTab.jsx`).
- **Action** : Encapsuler toute la logique d'état Firebase dans des hooks dédiés (comme `useFirebase.js`) ou utiliser des fonctions utilitaires de service isolées.
- **Nettoyage des Effets** : Chaque écouteur en temps réel (`onSnapshot`) au sein d'un `useEffect` doit impérativement retourner sa fonction de désabonnement (`unsubscribe`) pour éviter les fuites de mémoire et la surconsommation de lectures Firebase.

### Structure des Composants
- Privilégier les composants fonctionnels purs et découper l'UI en sous-composants réutilisables (ex: boutons d'action, modales isolées).
- Valider systématiquement la présence et le type des *Props* si le projet ou le workflow l'exige.

## 2. Protocole de Sécurité Côté Client (Front-End)

### Principe du "Client Non Fiable"
L'agent doit coder en partant du principe que le code front-end peut être manipulé. La sécurité repose sur les Règles de Sécurité Firestore, mais le client doit empêcher les comportements anormaux :
1. **Validation Avant Envoi** : Avant tout `setDoc` ou `addDoc`, valider les types et la cohérence des données dans le code JavaScript (ex: vérifier qu'un prix n'est pas négatif, qu'une chaîne ne dépasse pas une certaine longueur).
2. **Sanitisation des Entrées** : Nettoyer ou échapper les chaînes de caractères issues des champs de saisie utilisateur avant de les stocker ou de les afficher pour prévenir les injections ou corruptions d'affichage.
3. **Zéro Secret dans le JSX** : Ne jamais intégrer de clés privées, de jetons d'administration (Service Account) ou de mots de passe en dur dans les composants. Utiliser exclusivement l'initialisation sécurisée via `import.meta.env` ou les configurations globales injectées par la plateforme.

### Gestion Étanche de l'Identité (UI Customization)
- Lors de l'affichage d'éléments sensibles (bouton de suppression, favoris), l'UI doit directement dépendre de l'état `user` fourni par Firebase Auth (ex: `user.uid`).
- Ne jamais stocker ou modifier des variables de rôle (ex: `isAdmin: true`) localement dans le `localStorage` ou l'état global pour accorder des droits d'écriture, sans une vérification parallèle ou un contrôle strict du token d'authentification.

## 3. Optimisation des Performances & Éco-conception NoSQL

### Limitation des Renders et Lectures
- **Sélection de Champs** : Éviter de déclencher des écoutes globales si un sous-ensemble de données statiques suffit. Privilégier `getDoc` pour les lectures uniques d'éléments de configuration.
- **Clés uniques de listes** : Lors de l'utilisation de `.map()`, utiliser des identifiants uniques et stables (ex: `item.id` venant de la BDD) plutôt que l'index du tableau (`index`) pour garantir des performances de réconciliation optimales dans le DOM Virtuel.

## 4. Workflow de Validation pour l'Agent

**Avant de soumettre une modification de code JSX :**
1. **Vérification syntaxique** : S'assurer que toutes les balises JSX sont correctement fermées et que les conditions ternaires ne génèrent pas de rendus `undefined` indésirables.
2. **Audit d'Impact Firebase** : La modification augmente-t-elle le nombre de lectures/écritures de manière exponentielle ? Si oui, proposer une alternative de mise en cache ou de regroupement.
3. **Vérification Sécurité** : Est-ce qu'une action d'écriture utilise bien l'UID de l'utilisateur connecté de manière sécurisée (ex: `request.auth.uid` attendu côté règles, et injecté via `user.uid` côté client) ?