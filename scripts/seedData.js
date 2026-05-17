export const BBQ_DATA = [
  { id: 1, name: "Merguez Artisanales", category: "boeuf", method: "Directe", time: "8m", target: "75°C", icon: "Flame", wood: "Vigne", desc: "Ne jamais piquer pour garder le jus épicé à l'intérieur.", amazon: "https://amazon.fr/s?k=grille+bbq+kettle&tag=kettleapppro2-21" },
  { id: 2, name: "Chicken Wings Crispy", category: "volaille", method: "Indir/Dir", time: "25m", target: "74°C", icon: "Zap", wood: "Pommier", desc: "Utilisez le rub 'Crispy' (levure chimique) pour une peau craquante.", amazon: "https://amazon.fr/s?k=rub+bbq+halal&tag=kettleapppro2-21" },
  { id: 3, name: "Côte de Bœuf (Reverse Sear)", category: "boeuf", method: "Indir/Dir", time: "45m", target: "54°C", icon: "Award", wood: "Chêne", desc: "Saisir en direct à la fin pour une croûte de Maillard parfaite.", amazon: "https://amazon.fr/s?k=thermometre+viande+professionnel&tag=kettleapppro2-21" },
  { id: 4, name: "Pdt en Papillote (Alu)", category: "legumes", method: "Indirecte", time: "45m", target: "92°C", icon: "Box", wood: "Chêne", desc: "Enveloppez avec du beurre, du gros sel et du romarin.", amazon: "https://amazon.fr/s?k=panier+legumes+bbq&tag=kettleapppro2-21" },
  { id: 5, name: "Maïs Doux (Épis)", category: "legumes", method: "Directe", time: "15m", target: "Caramélisé", icon: "Flame", wood: "Pommier", desc: "Retournez toutes les 3 min. Badigeonnez de beurre salé.", amazon: "https://amazon.fr/s?k=pique+mais+bbq&tag=kettleapppro2-21" },
  { id: 6, name: "Pavé de Saumon sur Planche", category: "poisson", method: "Planche", time: "12m", target: "63°C", icon: "Fish", wood: "Cèdre", desc: "Cuisinez sur une planche de cèdre trempée 2h dans l'eau.", amazon: "https://amazon.fr/s?k=planche+cedre+bbq&tag=kettleapppro2-21" },
  { id: 7, name: "Aubergines Grillées", category: "legumes", method: "Directe", time: "8m", target: "Fondant", icon: "Leaf", wood: "Vigne", desc: "Huilez généreusement chaque face avant la pose.", amazon: "https://amazon.fr/s?k=accessoire+legumes+bbq&tag=kettleapppro2-21" },
  { id: 8, name: "Short Ribs de Bœuf (Dino Ribs)", category: "boeuf", method: "Indirecte", time: "8h", target: "93°C", icon: "Timer", wood: "Hickory", desc: "Le Graal du BBQ Low & Slow. La viande doit être souple comme du beurre.", amazon: "https://amazon.fr/s?k=support+ribs+bbq&tag=kettleapppro2-21" },
  { id: 9, name: "Picanha de Bœuf Entière", category: "boeuf", method: "Indir/Dir", time: "50m", target: "52°C", icon: "Flame", wood: "Cerisier", desc: "Tranchez le gras en losange, démarrez en indirect côté chair.", amazon: "https://amazon.fr/s?k=couteau+trancher+viande&tag=kettleapppro2-21" },
  { id: 10, name: "Magret de Canard au Poivre", category: "canard", method: "Indirecte", time: "25m", target: "54°C", icon: "TrendingUp", wood: "Pécan", desc: "Cuisson indirecte exclusive côté peau pour fondre le gras sans flamme.", amazon: "https://amazon.fr/s?k=accessoire+kettle+weber&tag=kettleapppro2-21" },
  { id: 11, name: "Poulpe Grillé Smoky", category: "poisson", method: "Directe", time: "6m", target: "Croustillant", icon: "Activity", wood: "Aulne", desc: "Blanchir le poulpe avant, puis le raidir à feu ultra-vif avec un filet d'huile de sésame.", amazon: "https://amazon.fr/s?k=pince+barbecue+longue&tag=kettleapppro2-21" }
];

export const LAB_DATA = {
  boeuf: {
    label: "Bœuf",
    icon: "🥩",
    woods: [
      { name: "Chêne (Oak)", desc: "Fumée robuste et noble. Idéal pour les grosses pièces comme le Tomahawk ou les Short Ribs.", power: 4 },
      { name: "Hickory", desc: "Le goût fumé intense et piquant du BBQ américain traditionnel.", power: 5 }
    ],
    spices: ["Poivre noir concassé", "Gros sel gris", "Ail semoule", "Café moulu (pour un bark d'enfer)"],
    tip: "Laissez toujours la viande reposer sous une feuille d'alu lâche au moins 15 min après cuisson pour redistribuer les jus."
  },
  agneau: {
    label: "Agneau",
    icon: "🍖",
    woods: [
      { name: "Vigne", desc: "Arômes floraux et fumée rapide, parfait pour les côtelettes.", power: 4 },
      { name: "Pécan", desc: "Doux, fruité et légèrement sucré.", power: 3 }
    ],
    spices: ["Cumin", "Fleur de sel", "Ail frais pressé", "Romarin", "Menthe"],
    tip: "Fumez l'agneau avec des sarments de vigne au tout dernier moment de la saisie."
  },
  volaille: {
    label: "Volaille",
    icon: "🍗",
    woods: [
      { name: "Pommier", desc: "Fumée douce et fruitée qui ne sature pas la chair délicate du poulet.", power: 2 },
      { name: "Cerisier", desc: "Donne une couleur acajou et rouge foncé magnifique à la peau.", power: 2 }
    ],
    spices: ["Paprika fumé", "Thym séché", "Poudre d'ail", "Gingembre", "Levure chimique"],
    tip: "Séchez la peau de votre poulet au frigo pendant 4h sur une grille avant de l'enduire de rub pour un max de croustillant."
  },
  poisson: {
    label: "Poisson",
    icon: "🐟",
    woods: [
      { name: "Aulne (Alder)", desc: "Le bois le plus fin et discret, parfait pour ne pas masquer le goût du saumon.", power: 1 },
      { name: "Cèdre", desc: "Incontournable sous forme de planche technique saturée en eau.", power: 3 }
    ],
    spices: ["Aneth fraîche", "Sucre brun", "Zestes de citron", "Baies roses pilées"],
    tip: "Huilez la grille à haute température juste avant de poser un poisson entier pour éviter que la peau n'attache."
  },
  legumes: {
    label: "Légumes",
    icon: "🥬",
    woods: [
      { name: "Érable", desc: "Fumée très légère, subtilement sucrée, excellente sur les courges et carottes.", power: 2 },
      { name: "Hêtre", desc: "Bois très polyvalent, neutre, idéal pour les légumes racines et pommes de terre.", power: 3 }
    ],
    spices: ["Herbes de Provence", "Fleur de sel", "Piment d'Espelette", "Huile d'olive extra-vierge"],
    tip: "Une touche de miel ou de sirop d'érable en fin de cuisson directe booste instantanément la caramélisation."
  }
};

export const RECIPES = [
  {
    id: "r1",
    title: "Poulet 'King Crispy' Halal",
    tag: "Populaire",
    time: "45 min",
    difficulty: "Intermédiaire",
    desc: "La peau la plus croustillante de l'histoire du Kettle grâce à l'astuce de la levure.",
    ingredients: ["1 Poulet entier (Certifié Halal)", "1 cuillère à café de levure chimique", "Sel, Poivre, Paprika, Poudre d'ail"],
    steps: [
      "Préparez le Kettle pour une chaleur indirecte à 200°C.",
      "Mélangez intimement les épices avec la levure chimique.",
      "Frictionnez le poulet (rub) uniformément sur toute la surface.",
      "Placez le poulet en zone indirecte pendant 40-45 min.",
      "Vérifiez l'atteinte des 74°C à cœur au thermomètre."
    ],
    gear: { name: "Thermomètre à sonde", link: "https://amazon.fr/s?k=thermometre+bbq&tag=kettleapppro2-21" }
  },
  {
    id: "r2",
    title: "Short Ribs de Bœuf 'Texas Style'",
    tag: "Expert",
    time: "8 heures",
    difficulty: "Avancé",
    desc: "Une croûte noire (bark) ultra-généreuse et une viande de bœuf fondante à la texture de beurre.",
    ingredients: ["1 Plat de côtes de bœuf (3 ou 4 os)", "Poivre noir de haut grade concassé (50%)", "Gros sel marin (50%)", "Poudre d'ail"],
    steps: [
      "Préparez le Kettle pour une cuisson indirecte stable à 110-120°C (méthode Snake ou paniers déportés).",
      "Appliquez le rub sel/poivre généreusement sur toutes les faces.",
      "Ajoutez 2 gros chunks de bois de Chêne ou Hickory sur les braises.",
      "Fumez pendant environ 5h jusqu'à ce que le 'stall' soit passé et que le bark soit bien fixé.",
      "Emballez dans du papier de boucher (butcher paper) ou double alu et poursuivez jusqu'à 93-95°C à cœur."
    ],
    gear: { name: "Papier de boucher BBQ", link: "https://amazon.fr/s?k=butcher+paper+bbq&tag=kettleapppro2-21" }
  },
  {
    id: "r3",
    title: "Chicken Wings 'Muay Thai'",
    tag: "Signature",
    time: "30 min",
    difficulty: "Facile",
    desc: "Ailes de poulet laquées à l'asiatique, croustillantes et parfumées à la citronnelle.",
    ingredients: ["1kg d'ailes de poulet pilon/aileron", "2 bâtons de citronnelle hachés", "3 gousses d'ail", "2 c.à.s de sauce soja", "2 c.à.s de miel", "1 c.à.c de levure chimique"],
    steps: [
      "Marinez les wings 2h avec l'ail, la citronnelle et la sauce soja.",
      "Égouttez, puis mélangez les wings avec la levure chimique juste avant cuisson.",
      "Disposez en zone indirecte à 220°C pendant 25 min en retournant à mi-cuisson.",
      "Pendant les 5 dernières minutes, badigeonnez de miel directement sur la grille en zone directe pour caraméliser sans brûler."
    ],
    gear: { name: "Pince de précision", link: "https://amazon.fr/s?k=pince+bbq&tag=kettleapppro2-21" }
  },
  {
    id: "r4",
    title: "Banh Mi au Bœuf Grillé à la Citronnelle",
    tag: "Premium",
    time: "45 min",
    difficulty: "Intermédiaire",
    desc: "Le parfait équilibre entre le croustillant de la baguette et le smoky d'un bœuf mariné à l'asiatique.",
    ingredients: ["800g de bavette ou faux-filet émincé finement", "3 bâtons de citronnelle fraîche hachés", "2 c.à.s de sauce d'huître", "1 c.à.s de sauce soja", "1 c.à.s de miel", "Pickles de carottes et daikon, coriandre fraîche, baguettes"],
    steps: [
      "Faites mariner le bœuf émincé avec la citronnelle, l'ail haché, la sauce d'huître, la sauce soja et le miel pendant 2h minimum.",
      "Allumez une cheminée complète de charbon pour obtenir une chaleur directe intense (250°C+).",
      "Saisissez le bœuf très rapidement en zone directe (cuisson flash, 1 à 2 min par face) pour choper le goût du feu sans assécher.",
      "Montez vos baguettes avec une mayonnaise légère, le bœuf smoky chaud, les pickles croquants et un max de coriandre."
    ],
    gear: { name: "Grille en fonte de saisie", link: "https://amazon.fr/s?k=grille+fonte+bbq+kettle&tag=kettleapppro2-21" }
  }
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

export const SHOP_ITEMS = [
  { id: 's1', name: "Thermomètre Instantané", price: "19.99€", rating: 4.8, img: "🌡️", link: "https://amazon.fr/s?k=thermometre+bbq&tag=kettleapppro2-21", sponsor: true },
  { id: 's2', name: "Cheminée d'Allumage", price: "24.50€", rating: 4.9, img: "🔥", link: "https://amazon.fr/s?k=cheminee+allumage+bbq&tag=kettleapppro2-21", sponsor: false }
];
