export const BBQ_DATA = [
  { id: 1, name: "Merguez Artisanales", category: "boeuf", method: "Directe", time: "8m", target: "75°C", icon: "Flame", wood: "Vigne", desc: "Ne jamais piquer pour garder le jus épicé à l'intérieur.", amazon: "https://amazon.fr/s?k=grille+bbq+kettle" },
  { id: 2, name: "Chicken Wings", category: "volaille", method: "Indir/Dir", time: "25m", target: "74°C", icon: "Zap", wood: "Pommier", desc: "Utilisez le rub 'Crispy' (levure chimique) pour une peau craquante.", amazon: "https://amazon.fr/s?k=rub+bbq+halal" },
  { id: 3, name: "Côte de Bœuf", category: "boeuf", method: "Indir/Dir", time: "45m", target: "54°C", icon: "Award", wood: "Chêne", desc: "Saisir en direct à la fin pour une croûte de Maillard parfaite.", amazon: "https://amazon.fr/s?k=thermometre+viande+professionnel" },
  { id: 4, name: "Pdt en Papillote (Alu)", category: "legumes", method: "Indirecte", time: "45m", target: "92°C", icon: "Box", wood: "Chêne", desc: "Enveloppez avec du beurre, du gros sel et du romarin.", amazon: "https://amazon.fr/s?k=panier+legumes+bbq" },
  { id: 5, name: "Maïs Doux (Épis)", category: "legumes", method: "Directe", time: "15m", target: "Caramélisé", icon: "Flame", wood: "Pommier", desc: "Retournez toutes les 3 min. Badigeonnez de beurre salé.", amazon: "https://amazon.fr/s?k=pique+mais+bbq" },
  { id: 6, name: "Pavé de Saumon", category: "poisson", method: "Planche", time: "12m", target: "63°C", icon: "Fish", wood: "Cèdre", desc: "Cuisinez sur une planche de cèdre trempée 2h dans l'eau.", amazon: "https://amazon.fr/s?k=planche+cedre+bbq" },
  { id: 7, name: "Aubergines Grillées", category: "legumes", method: "Directe", time: "8m", target: "Fondant", icon: "Leaf", wood: "Vigne", desc: "Huilez généreusement chaque face avant la pose.", amazon: "https://amazon.fr/s?k=accessoire+legumes+bbq" }
];

export const METHOD_LEGEND = [
  { 
    label: "Directe", 
    color: "bg-rose-500", 
    desc: "Aliments au-dessus des braises.", 
    setup: "Braises étalées au centre.",
    icon: "🔥"
  },
  { 
    label: "Indirecte", 
    color: "bg-cyan-500", 
    desc: "Chaleur tournante (convection).", 
    setup: "Braises sur les côtés opposés.",
    icon: "🌀"
  },
  { 
    label: "Hybride / Planche", 
    color: "bg-fuchsia-500", 
    desc: "Saisie puis rôtissage (ou inverse).", 
    setup: "Une zone vide, une zone pleine.",
    icon: "⚡"
  }
];

export const LAB_DATA = {
  boeuf: {
    label: "Bœuf",
    icon: "🥩",
    woods: [
      { name: "Chêne (Oak)", desc: "Fumée robuste et noble. Idéal pour les grosses pièces.", power: 4 },
      { name: "Hickory", desc: "Le goût fumé intense du BBQ américain.", power: 5 }
    ],
    spices: ["Poivre noir", "Gros sel", "Ail semoule", "Café moulu"],
    tip: "Laissez la viande reposer au moins 10 min après cuisson pour redistribuer les jus."
  },
  agneau: {
    label: "Agneau",
    icon: "🍖",
    woods: [
      { name: "Vigne", desc: "Arômes floraux et fumée rapide.", power: 4 },
      { name: "Pécan", desc: "Doux et légèrement sucré.", power: 3 }
    ],
    spices: ["Cumin", "Coriandre", "Ail frais", "Menthe"],
    tip: "Fumez l'agneau avec des sarments de vigne au dernier moment."
  },
  volaille: {
    label: "Volaille",
    icon: "🍗",
    woods: [
      { name: "Pommier", desc: "Fumée douce et fruitée.", power: 2 },
      { name: "Cerisier", desc: "Colore magnifiquement la peau du poulet.", power: 2 }
    ],
    spices: ["Paprika", "Oignon poudre", "Thym", "Levure chimique"],
    tip: "La levure chimique dans le rub crée des micro-bulles pour un croustillant extrême."
  },
  poisson: {
    label: "Poisson",
    icon: "🐟",
    woods: [
      { name: "Aulne (Alder)", desc: "Le bois le plus fin, parfait pour le saumon.", power: 1 },
      { name: "Cèdre", desc: "Incontournable en planche de bois.", power: 3 }
    ],
    spices: ["Aneth", "Sucre brun", "Agrumes", "Baies roses"],
    tip: "Utilisez une planche de bois trempée 2h dans l'eau avant cuisson."
  },
  legumes: {
    label: "Légumes",
    icon: "🥬",
    woods: [
      { name: "Érable", desc: "Fumée très légère et sucrée.", power: 2 },
      { name: "Hêtre", desc: "Polyvalent pour les légumes racines.", power: 3 }
    ],
    spices: ["Herbes de Provence", "Fleur de sel", "Vinaigre balsamique"],
    tip: "Une touche de sucre ou de miel aide à la caramélisation en cuisson directe."
  }
};

export const SHOP_ITEMS = [
  { id: 's1', name: "Thermomètre Instantané", price: "19.99€", rating: 4.8, img: "🌡️", link: "https://amazon.fr/s?k=thermometre+bbq", sponsor: true },
  { id: 's2', name: "Cheminée d'Allumage", price: "24.50€", rating: 4.9, img: "🔥", link: "https://amazon.fr/s?k=cheminee+allumage+bbq", sponsor: false }
];

export const RECIPES = [
  {
    id: 'r1',
    title: "Poulet 'King Crispy' Halal",
    tag: "Populaire",
    time: "45 min",
    difficulty: "Intermédiaire",
    desc: "La peau la plus croustillante de l'histoire du Kettle.",
    ingredients: ["1 Poulet entier (Halal)", "Levure chimique", "Sel, Poivre, Paprika"],
    steps: ["Préparez le Kettle pour une chaleur indirecte.", "Mélangez les épices avec la levure.", "Placez le poulet en zone indirecte pendant 40 min.", "Vérifiez les 74°C à cœur."],
    gear: { name: "Thermomètre à sonde", link: "https://amazon.fr/s?k=thermometre+bbq" }
  }
];
