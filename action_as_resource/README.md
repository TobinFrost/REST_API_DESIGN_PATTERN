# 🚀 Action-as-Resource API - Exemple d'erreur REST

## 📖 Introduction

Ce projet met en lumière une erreur fréquente dans la conception des API REST : traiter les actions métiers comme des verbes dans l'URL plutôt que de les modéliser comme des ressources (**Action-as-Resource pattern**). Il compare une mauvaise pratique à la bonne manière RESTful de structurer ces actions.

---

## ⚠️ Erreur mise en évidence

### ❌ Mauvaise pratique : Utilisation de verbes dans l'URL

Dans cette approche incorrecte, on déclenche une action (ex : désactivation d'un compte utilisateur) via un verbe dans l'URL :

```http
POST /users/123/desactivateAccount
```

🔎 **Problèmes** :

- L'URL contient un verbe (`desactivateAccount`), ce qui va à l'encontre des conventions REST.
- Difficulté à documenter ou à découvrir automatiquement.
- Moins flexible à faire évoluer.

---

### ✅ Bonne pratique : Modélisation de l'action comme une ressource

En respectant le pattern _Action-as-Resource_, l'action est représentée comme une **sous-ressource** :

```http
POST /users/123/desactivation
```

🎯 **Avantages** :

- L'action devient une entité à part entière.
- Permet de la consulter ou de la supprimer (ex : `GET /users/123/desactivation`).
- Suit les standards REST : tout est ressource.
- Possibilité d’ajouter des métadonnées (auteur, date, raison, etc.).

---

## 📦 Stack utilisée

Ce projet utilise les technologies suivantes :

- **Node.js** – Environnement d'exécution JavaScript
- **Express.js** – Framework web minimaliste
- **TypeScript** – Typage statique pour une meilleure robustesse

---

## ⚙️ Installation et exécution

### Prérequis

- Node.js installé (v16 ou supérieur recommandé)
- npm ou yarn

### Étapes

1. Cloner le dépôt :

   ```bash
    git clone https://github.com/TobinFrost/REST_API_DESIGN_PATTERN.git
   cd REST_API_DESIGN_PATTERN/action_as_resource
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Configurer les variables d'environnement :

   ```bash
   cp .env.dist .env
   ```

4. Lancer le projet :
   ```bash
   npm run dev
   ```
   Le serveur tournera par défaut sur `http://localhost:3000`.

---

## 📌 Endpoints disponibles

| Méthode | Route                               | Description                                         |
| ------- | ----------------------------------- | --------------------------------------------------- |
| POST    | `/users/:userId/desactivateAccount` | ❌ Désactive un utilisateur (mauvais exemple)       |
| POST    | `/users/:userId/desactivation`      | ✅ Crée une ressource de désactivation (recommandé) |

---

## 🎓 Objectif pédagogique

Ce projet a pour but de :

- Comprendre pourquoi les **actions ne doivent pas être représentées comme des verbes** dans les URLs.
- Appliquer le principe REST de _« tout est ressource »_.
- Structurer des actions métiers de manière **extensible**, **documentable** et **maintenable**.

---

👨‍💻 Inspiré des meilleures pratiques REST et de cas concrets d’architecture d’API modernes.

---
