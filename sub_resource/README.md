# REST API - Erreur courante sur le pattern "Sub Resource"

## 🚀 Introduction

Ce projet met en évidence une erreur courante dans la conception des API REST concernant l'organisation des ressources en sous-ressources (**Sub-resource pattern**). Il compare une mauvaise pratique avec la bonne approche pour structurer les URL de manière hiérarchique.

## Erreur mise en évidence

### ❌ Mauvaise pratique : Utilisation de Query Params pour identifier les relations

Dans cette approche incorrecte, l'API récupère une commande spécifique d'un utilisateur via des **query params** :

```
GET /users?userId=1&orderId=101
```

Problèmes :

- Ne respecte pas la hiérarchie des ressources.
- Rend l'URL moins intuitive.
- Plus difficile à gérer et à documenter.

### ✅ Bonne pratique : Utilisation des sous-ressources

La bonne approche consiste à structurer l'URL en sous-ressources comme suit :

```
GET /users/1/orders
GET /users/1/orders/101
```

Avantages :

- Respecte la relation entre les entités (un utilisateur possède des commandes).
- Facilite la découverte de l'API.
- Suit les standards RESTful.

## 🛠️ Stack utilisée

Ce projet utilise les technologies suivantes :

- **Node.js** - Environnement d'exécution JavaScript
- **Express.js** - Framework web minimaliste pour Node.js
- **TypeScript** - Typage statique pour JavaScript

## 📦 Installation et exécution

### Prérequis

- Node.js installé (version 16+ recommandée)
- npm ou yarn

### Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/TobinFrost/REST_API_DESIGN_PATTERN.git
   cd REST_API_DESIGN_PATTERN/sub_resource
   ```
2. Installez les dépendances :
   ```sh
   npm install
   ```

### Configuration

Copiez le fichier `.env.dist` pour créer un fichier `.env` et ajustez les variables si nécessaire :

```sh
cp .env.dist .env
```

### Lancer le projet

```sh
npm run dev
```

Le serveur sera accessible sur `http://localhost:3000`.

## Endpoints disponibles

| Méthode | Route                            | Description                      |
| ------- | -------------------------------- | -------------------------------- |
| GET     | `/users?userId=1&orderId=101`    | ❌ Mauvaise pratique             |
| GET     | `/users/:userId/orders`          | ✅ Liste des commandes d'un user |
| GET     | `/users/:userId/orders/:orderId` | ✅ Détails d'une commande        |

## 🎯 Objectif Pédagogique

L'objectif de ce projet est d'illustrer l'importance d'une bonne structuration des URL en API REST. Il met en avant pourquoi l'utilisation des sous-ressources est une meilleure approche que les query params pour représenter des relations entre entités.
Projet développé pour illustrer les bonnes pratiques RESTful en matière de sous-ressources.

---

✨ Happy coding ! 🚀
