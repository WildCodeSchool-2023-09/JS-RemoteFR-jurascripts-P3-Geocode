
![Logo](https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P3-Geocode/assets/144217492/f7f55f76-228f-4843-8625-3308272b67e4)

# Concept du projet (dans le cadre d'une formation de développeur web et web mobile)

Etre en possession d'un MVP fonctionnel pour notre présentation auprès de la société GeoCode - site web responsive (exportation vers une application mobile probable)

# Configuration et utilisation (partie technique)

### Utilisateurs Windows

Assurez-vous d'exécuter ces commandes dans un terminal git pour éviter les [problèmes avec les formats de nouvelle ligne](https://en.wikipedia.org/wiki/Newline#Issues_with_différent_newline_formats) :

```
git config --global core.eol lf
git config --global core.autocrlf faux
```

### Initialisation du projet

- Dans VSCode, installez les plugins **Prettier - Code formateur** et **ESLint** et configurez-les
- Clonez ce dépôt, entrez-le
- Exécutez la commande `npm install`
- Créez des fichiers d'environnement (`.env`) à la fois dans `backend` et `frontend` : vous pouvez copier les fichiers `.env.sample` en guise de démarreur (ne les supprimez pas)

### Commandes disponibles

- `db:migrate` : Exécutez le script de migration de la base de données
- `db:seed` : Exécutez le script de départ de la base de données
- `db:csv` : Exécutez le script de csv pour peupler la base de données (à éxécuter dans le backend)
- `dev` : démarre les deux serveurs (frontend + backend) dans un seul terminal
- `dev-front` : Démarre le serveur frontend React
- `dev-back` : Démarre le serveur backend Express
- `lint` : exécute les outils de validation (sera exécuté à chaque _commit_ et refusera le code impur)

### Outils

- _Concurrently_ : permet à plusieurs commandes de s'exécuter simultanément dans la même CLI
- _Husky_ : Permet d'exécuter des commandes spécifiques qui se déclenchent sur des événements _git_
- _Vite_ : Alternative à _Create-React-App_, packaging moins d'outils pour une expérience plus fluide
- _ESLint_ : outil "Qualité du code", garantit que les règles choisies seront appliquées
- _Prettier_ : outil "Qualité du code" également, focus sur le guide de style
- _Airbnb Standard_ : Un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS

## Déploiement avec Traefik

> ⚠️ Prérequis : Vous devez au préalable avoir installé et configuré Traefik sur votre VPS.
> https://github.com/WildCodeSchool/vps-traefik-starter-kit/

Pour le déploiement, vous devez vous rendre dans `secrets` → app `actions` sur le repo github pour l'insérer via `Nouveau secret du référentiel` :

- SSH_HOST : adresse IP de votre VPS
- SSH_USER : Connexion SSH à votre VPS
- SSH_PASSWORD : Mot de passe de connexion SSH à votre VPS

Et une variable publique de l'onglet `/settings/variables/actions` :

- PROJECT_NAME : le nom du projet utilisé pour créer le sous-domaine.

> ⚠️ Attention : les traits de soulignement ne sont pas autorisés. Ils peuvent causer des problèmes avec le certificat let's encrypt

Utilisez ce même onglet pour ajouter les autres variables d'environnement requises pour le projet, le cas échéant.

Seul le backend sera accessible. Le chemin racine `"/"` sera redirigé vers le dossier dist sur votre frontend. Afin de permettre cela, veuillez décommenter la ligne comme expliqué sur `backend/src/app.js` (ligne 102).
Étant donné que le backend servira le front, la variable globale VITE_BACKEND_URL sera définie avec une chaîne vide.

Votre URL sera ` https://${PROJECT-NAME}.${subdomain}.wilders.dev/`.

### À propos de la base de données

La base de données est automatiquement déployée avec le nom de votre dépôt. Lors de la construction du projet (`docker-entry.sh`), la commande `node migrate.js` est exécutée dans le backend. Si vous souhaitez amorcer automatiquement votre base de données à l'aide du script `seed.js`, remplacez la commande _build_ sur votre `backend/package.json` par `node migrate.js && node seed.js`.

### À propos des biens publics (images, polices...)

N'utilisez aucun dossier public sur votre frontend. Ce dossier ne sera pas accessible en ligne. Vous pouvez déplacer vos actifs publics dans le dossier « backend/public ». Préférez les [actifs statiques](https://vitejs.dev/guide/assets) lorsque cela est possible.

### À propos des journaux

Si vous souhaitez accéder aux logs de votre projet en ligne (pour suivre le déploiement ou surveiller toute erreur de bug), connectez-vous à votre VPS (`ssh user@host`).
Ensuite, allez sur votre projet spécifique et exécutez `docker compose logs -t -f`.
