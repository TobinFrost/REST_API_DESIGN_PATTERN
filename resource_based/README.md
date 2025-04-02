# REST API - Erreur courante sur le pattern "Resource-based"

## 🚀 Introduction

Ce projet illustre une erreur courante dans la conception d'API REST lorsqu'on ne respecte pas le principe **"Resource-based"**. L'objectif est de montrer pourquoi il est important d'utiliser des **noms de ressources (nouns)** pour structurer ses endpoints, au lieu de verbes qui décrivent des actions.

## ❌ Mauvaise pratique

Une erreur fréquente est d'utiliser des **verbes dans les routes**, ce qui casse la logique RESTful. Exemple :

```http
POST /createUser
GET /getUserById/1
DELETE /removeUser/1
```

🚨 **Problèmes :**

- **Non standard** : Les actions (`createUser`, `getUserById`) ne suivent pas la convention REST.
- **Moins intuitif** : Difficile à deviner pour les développeurs.
- **Moins évolutif** : Plus dur à maintenir à long terme.

## ✅ Bonne pratique

En respectant **le pattern "Resource-based"**, on doit utiliser **des noms de ressources** (nouns) et s'appuyer sur les **méthodes HTTP** pour définir l'action :

```http
POST /users        # Créer un utilisateur
GET /users/1       # Récupérer un utilisateur par ID
DELETE /users/1    # Supprimer un utilisateur
```

✨ **Avantages :**

- **RESTful et standardisé** ✅
- **Facilement compréhensible** ✅
- **Extensible et maintenable** ✅

## 📦 Installation

```bash
git clone https://github.com/TobinFrost/REST_API_DESIGN_PATTERN.git
cd REST_API_DESIGN_PATTERN/resource_based
npm install
```

## ▶️ Lancer le projet

```bash
npm run dev
```

L'API sera accessible sur **http://localhost:3000**.

## 📖 Endpoints disponibles

| Méthode | Endpoint     | Description                     |
| ------- | ------------ | ------------------------------- |
| GET     | `/users`     | Récupérer tous les utilisateurs |
| GET     | `/users/:id` | Récupérer un utilisateur par ID |
| POST    | `/users`     | Créer un nouvel utilisateur     |
| DELETE  | `/users/:id` | Supprimer un utilisateur        |

## 🛠 Stack utilisée

- **Node.js** + **Express.js**
- **TypeScript**

## 📌 Objectif pédagogique

L'objectif de ce projet est de sensibiliser aux **bonnes pratiques RESTful** en évitant des erreurs de conception courantes. En respectant le principe **"Resource-based"**, on garantit une API plus propre, plus intuitive et plus facile à maintenir.

## 🔧 Configuration de l'environnement

Ce projet utilise un fichier `.env` pour stocker les variables d'environnement. Un fichier modèle `.env.dist` est fourni pour référence.

### 📄 Étapes pour configurer votre `.env` :

1. Copiez le fichier `.env.dist` en `.env` :
   ```bash
   cp .env.dist .env
   ```
2. Modifiez le fichier `.env` avec vos propres valeurs.
3. Assurez-vous que `.env` est bien **ajouté au fichier `.gitignore`** pour éviter de l'envoyer sur GitHub.

---

✨ Happy coding ! 🚀
