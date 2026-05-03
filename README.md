# SkillSwap

SkillSwap est une plateforme moderne et dynamique conçue pour permettre aux étudiants d'échanger leurs compétences sans transactions monétaires. Que vous souhaitiez apprendre le Python en échange de cours de guitare ou le design graphique contre de la couture, SkillSwap facilite ces connexions.

## Fonctionnalités

- **Découverte Intelligente** : Recherchez des étudiants par compétences offertes.
- **Recommandations Personnalisées** : Le système suggère automatiquement des profils qui correspondent à ce que vous souhaitez apprendre.
- **Gestion de Profil** : Personnalisez votre bio, votre photo et votre liste de compétences (Offres vs Besoins).
- **Système d'Échange** : Proposez des échanges en un clic aux profils qui vous intéressent.
- **Expérience Premium** : Interface fluide avec animations subtiles, mode sombre/clair harmonieux et design responsive.

## Technologies Utilisées

- **React 19** : Utilisation intensive des Functional Components et des Hooks.
- **Vite** : Pour un environnement de développement ultra-rapide.
- **Context API** : Gestion globale de l'état (authentification, notifications, données).
- **CSS3 (Vanilla)** : Design système complet avec variables CSS, Flexbox et Grid.
- **Hooks Personnalisés** : `useSearch` pour le filtrage et `useForm` pour la gestion des formulaires.

## Structure du Projet

```text
src/
 ├── components/       # Composants UI réutilisables (Navbar, Avatar, Cards, etc.)
 ├── context/          # AppContext pour la gestion de l'état global
 ├── data/             # Données mockées (Profils étudiants initiaux)
 ├── hooks/            # Hooks personnalisés (Recherche, Formulaires)
 ├── assets/           # Icônes et images statiques
 ├── App.jsx           # Orchestration des pages et de l'état global
 └── main.jsx          # Point d'entrée de l'application
```

## Installation et Lancement

1. **Cloner le projet**
   ```bash
   git clone <url-du-repo>
   cd skillswap
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer en mode développement**
   ```bash
   npm run dev
   ```

L'application sera accessible sur `http://localhost:5173`.

## Étudiants de Démo

Pour tester la plateforme, vous pouvez utiliser les emails suivants :
- `hassan@exemple.fr`
- `amin@exemple.fr`
- `hicham@exemple.fr`
- `fatiha@exemple.fr`
