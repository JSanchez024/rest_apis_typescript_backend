# REST API Backend - Node.js + Express + TypeScript

Servidor REST API para gestión de productos construido con Node.js, Express, TypeScript, Sequelize y PostgreSQL.

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## 📁 Estructura del proyecto

```
server/
├── src/
│   ├── __tests__/
│   │   └── server.test.ts          # Pruebas generales del servidor
│   ├── config/
│   │   ├── db.ts                   # Configuración de Sequelize
│   │   └── swagger.ts              # Configuración de Swagger/OpenAPI
│   ├── data/
│   │   └── index.ts                # Script para limpiar datos
│   ├── handlers/
│   │   ├── product.ts              # Controladores de productos
│   │   └── __test__/
│   │       └── product.test.ts     # Pruebas unitarias
│   ├── middleware/
│   │   └── index.ts                # Middlewares
│   ├── models/
│   │   └── Product.model.ts        # Modelo de Sequelize
│   ├── index.ts                    # Punto de entrada
│   ├── router.ts                   # Rutas API
│   └── server.ts                   # Configuración Express
├── jest.config.js
├── package.json
└── tsconfig.json
```

## 🚀 Tecnologías

- **Node.js** — Runtime
- **Express** — Framework web
- **TypeScript** — Tipado estático
- **Sequelize** — ORM para PostgreSQL
- **PostgreSQL** — Base de datos relacional
- **Swagger/OpenAPI** — Documentación API
- **Jest** — Testing framework
- **Supertest** — Testing HTTP
- **Morgan** — HTTP request logger
- **CORS** — Control de acceso origen cruzado
- **Express Validator** — Validación de datos
- **Dotenv** — Variables de entorno

  ---

✒️ Autor
Joaquin Sanchez / jsanchez024
