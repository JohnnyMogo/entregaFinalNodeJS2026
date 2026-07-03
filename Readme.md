# Proyecto Final - API de Productos

API REST desarrollada con Node.js, Express y Firebase Firestore para la gestión de productos y autenticación mediante JWT.

## Tecnologías utilizadas

- Node.js
- Express
- Firebase Firestore
- JSON Web Token (JWT)
- CORS
- Body Parser
- Dotenv

## Funcionalidades

- Obtener todos los productos.
- Obtener un producto por ID.
- Crear un nuevo producto.
- Eliminar un producto.
- Autenticación mediante JWT.
- Protección de rutas.
- Manejo de errores HTTP (400, 401, 403, 404 y 500).

## Endpoints

### Productos
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products/create`
- `DELETE /api/products/:id`

### Autenticación
- `POST /auth/login`

---

**Desarrollador:** Johnny Mogollon