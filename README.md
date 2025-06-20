<<<<<<< HEAD
# Site Internet Next.js - Hello World

Un projet Next.js moderne et élégant, configuré pour faciliter l'ajout d'effets visuels, d'animations et d'interactions dynamiques.

## 🚀 Fonctionnalités

- **Next.js 15** avec App Router
- **TypeScript** pour un code robuste et typé
- **Tailwind CSS** avec animations personnalisées
- **Mode sombre** automatique
- **Structure modulaire** prête pour l'extension
- **Responsive design** adaptatif

## 🛠️ Technologies utilisées

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [ESLint](https://eslint.org/) - Linting du code

## 📁 Structure du projet

```
src/
├── app/
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil Hello World
└── components/
    ├── ui/              # Composants UI de base (à créer)
    ├── layout/          # Composants de mise en page (à créer)
    ├── features/        # Composants fonctionnels (à créer)
    └── animations/      # Composants d'animation (à créer)
```

## 🎨 Animations disponibles

Le projet inclut des animations Tailwind personnalisées prêtes à utiliser :

- `animate-fade-in` - Apparition en fondu
- `animate-fade-in-up` - Apparition depuis le bas
- `animate-fade-in-down` - Apparition depuis le haut
- `animate-slide-in-left` - Glissement depuis la gauche
- `animate-slide-in-right` - Glissement depuis la droite
- `animate-bounce-in` - Apparition avec rebond
- `animate-float` - Effet de flottement
- `animate-glow` - Effet de lueur
- `animate-pulse-slow` - Pulsation lente

## 🚀 Démarrage rapide

1. **Installation des dépendances**
   ```bash
   npm install
   ```

2. **Lancement du serveur de développement**
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📝 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Vérification du code

## 🎯 Prochaines étapes suggérées

### Composants à ajouter
- [ ] Header avec navigation
- [ ] Footer avec liens
- [ ] Composants de formulaire
- [ ] Modales et overlays
- [ ] Carousels et sliders
- [ ] Graphiques et visualisations

### Effets visuels à implémenter
- [ ] Animations de transition de page
- [ ] Effets de parallaxe
- [ ] Interactions au scroll
- [ ] Hover effects avancés
- [ ] Particules animées
- [ ] Morphing de formes

### Fonctionnalités avancées
- [ ] Système de thèmes personnalisés
- [ ] Internationalisation (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Optimisation des performances
- [ ] Tests automatisés
- [ ] Déploiement automatique

## 🎨 Personnalisation

### Couleurs
Les couleurs peuvent être personnalisées dans `tailwind.config.ts` et `src/app/globals.css`.

### Animations
Ajoutez de nouvelles animations dans la section `keyframes` de `tailwind.config.ts`.

### Composants
Créez de nouveaux composants dans le dossier `src/components/` en suivant la structure recommandée.

## 📚 Ressources utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Guide TypeScript](https://www.typescriptlang.org/docs/)
- [Exemples d'animations CSS](https://animate.style/)

## 🤝 Contribution

Ce projet est conçu pour être facilement extensible. N'hésitez pas à ajouter de nouveaux composants, animations et fonctionnalités !

---

Créé avec ❤️ en utilisant Next.js 15 et Tailwind CSS
# Deploy Sun Jun  1 15:23:49 CEST 2025
=======
# 🍅 Pomodoro PWA

A beautiful and engaging Pomodoro timer designed to boost your productivity. Built as a Progressive Web App (PWA), it can be easily installed on your phone or desktop for quick access.

*N'hésitez pas à ajouter une capture d'écran de l'application ici.*

---

## ✨ Fonctionnalités

- **Minuteur Visuel :** Le temps est représenté par un cercle de progression animé pour une expérience plus engageante.
- **Cycles Pomodoro :** Gère automatiquement les cycles de travail (25 min), de pause courte (5 min) et de pause longue (15 min).
- **Couleurs Dynamiques :** L'interface change de couleur pour indiquer le mode actuel (travail, pause courte, ou pause longue).
- **Suivi des Tâches :** Nommez chaque session de travail pour savoir exactement sur quoi vous vous concentrez.
- **Historique des Sessions :** Toutes vos sessions terminées sont sauvegardées localement et peuvent être consultées dans une vue d'historique.
- **Progressive Web App (PWA) :** Installez l'application directement sur votre appareil (mobile ou ordinateur) pour une expérience native et un accès hors ligne.
- **Design Responsive :** L'interface s'adapte parfaitement à toutes les tailles d'écran.

## 🛠️ Stack Technique

- **Framework :** [React](https://reactjs.org/)
- **Outil de build :** [Vite](https://vitejs.dev/)
- **Langage :** [TypeScript](https://www.typescriptlang.org/)
- **Styling :** [Styled-components](https://styled-components.com/)
- **PWA :** [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)

## 🚀 Démarrage Rapide

Pour lancer le projet en local, suivez ces étapes :

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/Lofp34/pomodoro.git
    cd pomodoro
    ```

2.  **Installez les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancez le serveur de développement :**
    ```bash
    npm run dev
    ```

L'application sera alors disponible à l'adresse `http://localhost:5181`.

### Note sur la PWA

Pour que les fonctionnalités d'installation de la PWA fonctionnent correctement, assurez-vous de placer vos icônes (`pwa-192x192.png` et `pwa-512x512.png`) dans le dossier `/public`.

---

*Ce projet a été développé avec amour et concentration.*
>>>>>>> ca76e9fea40b21724fa7cd79ead20244cfeceeae
