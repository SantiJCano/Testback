# 🚀 Task API - Backend

API REST con **NestJS** y **TypeScript** para gestión de tareas con autenticación JWT.

## 🛠️ Stack Tecnológico

- **NestJS 10.x** + **TypeScript 5.x**
- **PostgreSQL** + **TypeORM 0.3.x**
- **JWT** + **Passport** (autenticación)
- **bcryptjs** (encriptación)

## 🏗️ Estructura

```
src/
├── auth/     # Autenticación (guards, strategies)
├── users/    # Gestión de usuarios
├── tasks/    # CRUD de tareas
└── main.ts   # Punto de entrada
```

## ⚡ Inicio Rápido

```bash
npm install
npm run start:dev  # Puerto 3000
```

> 📖 **Instalación detallada**: Ver `manual.md`

## 📡 API Endpoints

### Autenticación
- `POST /auth/register` - Registro de usuario
- `POST /auth/login` - Inicio de sesión

### Tareas (requiere JWT)
- `GET /tasks` - Listar tareas del usuario
- `POST /tasks` - Crear tarea
- `GET /tasks/:id` - Obtener tarea
- `PUT /tasks/:id` - Actualizar tarea
- `DELETE /tasks/:id` - Eliminar tarea

## 🔒 Características

- **Autenticación JWT** con Passport
- **Encriptación** de contraseñas (bcryptjs)
- **Validación** de datos (class-validator)
- **CORS** configurado
- **Testing** unitario y e2e

## 📦 Scripts

```bash
npm run start:dev    # Desarrollo
npm run build        # Producción
npm run test         # Tests
```

---

## 🧪 Testing de la API con Postman

Puedes probar todos los endpoints de la API usando [Postman](https://www.postman.com/). Sigue estos pasos:

### 1. Importar la colección (opcional)
- Puedes crear una colección nueva en Postman y agregar las siguientes peticiones manualmente, o exportar/importar una colección si tienes el archivo JSON.

### 2. Probar Registro de Usuario
- **Método:** POST
- **URL:** `http://localhost:3000/auth/register`
- **Body (JSON):**
  ```json
  {
    "email": "usuario@ejemplo.com",
    "password": "password123",
    "firstName": "Juan",
    "lastName": "Pérez"
  }
  ```

### 3. Probar Login
- **Método:** POST
- **URL:** `http://localhost:3000/auth/login`
- **Body (JSON):**
  ```json
  {
    "email": "usuario@ejemplo.com",
    "password": "password123"
  }
  ```
- **Respuesta:** Recibirás un token JWT en el campo `access_token`.

### 4. Usar el JWT en Endpoints Protegidos
- Copia el token JWT recibido tras el login.
- En las siguientes peticiones, ve a la pestaña **Authorization** de Postman y selecciona **Bearer Token**. Pega el token.

### 5. Probar Endpoints de Tareas
- **Listar tareas:**
  - **GET** `http://localhost:3000/tasks`
- **Crear tarea:**
  - **POST** `http://localhost:3000/tasks`
  - **Body (JSON):**
    ```json
    {
      "title": "Completar proyecto",
      "description": "Finalizar el desarrollo de la API",
      "status": "pending",
      "priority": "high",
      "dueDate": "2025-12-31T23:59:59.000Z"
    }
    ```
- **Actualizar tarea:**
  - **PUT** `http://localhost:3000/tasks/{id}`
  - **Body:** igual que crear tarea
- **Eliminar tarea:**
  - **DELETE** `http://localhost:3000/tasks/{id}`

### 6. Consejos Útiles
- Si recibes un error 401, revisa que el token JWT esté bien pegado.
- Puedes guardar variables de entorno en Postman para los tokens y URLs.
- Usa la función de **Tests** de Postman para validar respuestas automáticamente.


