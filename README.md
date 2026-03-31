# Backend Starter - EventHub API

Ce dossier contient un template de demarrage pour l'API EventHub.

## Demarrage rapide

1. Copier ce dossier et le renommer en `backend`
2. Copier `.env.example` vers `.env` et configurer les variables
3. Installer les dependances : `npm install`
4. Generer le client Prisma : `npm run db:generate`
5. Creer la base de donnees : `npm run db:push`
6. Demarrer le serveur : `npm run dev`

## Structure

```
backend-starter/
├── prisma/
│   ├── schema.prisma    # Schema de base de donnees (a completer)
│   └── seed.ts          # Donnees de test (a completer)
├── src/
│   ├── config/          # Configuration
│   ├── controllers/     # A implementer
│   ├── middleware/      # A implementer
│   ├── routes/          # A implementer
│   ├── services/        # A implementer
│   ├── schemas/         # A implementer (validation Zod)
│   ├── types/           # Types TypeScript
│   ├── utils/           # Utilitaires
│   ├── app.ts           # Application Express
│   └── index.ts         # Point d'entree
├── tests/               # Tests (a implementer)
├── package.json
├── tsconfig.json
└── jest.config.js
```

## Suivez le guide

Consultez `../GUIDE.md` pour les instructions detaillees etape par etape.
