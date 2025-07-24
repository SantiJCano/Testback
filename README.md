# 🚀 Task API - Backend del Sistema de Gestión de Tareas

## 📋 Descripción

API REST desarrollada con **NestJS** y **TypeScript** para la gestión completa de tareas. Proporciona un sistema robusto de autenticación y autorización, junto con operaciones CRUD completas para la administración de tareas de usuarios.

## 🛠️ Tecnologías Utilizadas

- **Framework**: NestJS 10.x
- **Lenguaje**: TypeScript 5.x
- **Base de Datos**: PostgreSQL
- **ORM**: TypeORM 0.3.x
- **Autenticación**: JWT (JSON Web Tokens)
- **Estrategias de Autenticación**: Passport (Local + JWT)
- **Encriptación**: bcryptjs
- **Validación**: class-validator + class-transformer

## 🏗️ Arquitectura del Proyecto

```
src/
├── auth/                 # Módulo de autenticación
│   ├── guards/          # Guards de protección de rutas
│   ├── strategies/      # Estrategias de Passport
│   └── auth.module.ts   # Configuración del módulo
├── users/               # Módulo de usuarios
│   ├── entities/        # Entidades de base de datos
│   ├── dto/            # Data Transfer Objects
│   └── users.service.ts # Lógica de negocio
├── tasks/               # Módulo de tareas
│   ├── entities/        # Entidades de base de datos
│   ├── dto/            # Data Transfer Objects
│   └── tasks.service.ts # Lógica de negocio
├── app.module.ts        # Módulo principal
└── main.ts             # Punto de entrada
```

## 🔧 Configuración e Instalación

### Prerrequisitos

- Node.js (v18 o superior)
- PostgreSQL (v12 o superior)
- npm o yarn

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Base de datos
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=tu_usuario
DATABASE_PASSWORD=tu_contraseña
DATABASE_NAME=task_management

# JWT
JWT_SECRET=tu_clave_secreta_muy_segura
JWT_EXPIRES_IN=24h

# Servidor
PORT=3000
```

### Instalación

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Configurar base de datos**:
   - Crear base de datos PostgreSQL
   - Configurar variables de entorno

3. **Ejecutar en modo desarrollo**:
   ```bash
   npm run start:dev
   ```

4. **Construir para producción**:
   ```bash
   npm run build
   npm run start
   ```

## 📡 Endpoints de la API

### 🔐 Autenticación

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| POST | `/auth/register` | Registro de nuevo usuario | No |
| POST | `/auth/login` | Inicio de sesión | No |

**Ejemplo de registro**:
```json
POST /auth/register
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña123",
  "firstName": "Juan",
  "lastName": "Pérez"
}
```

**Ejemplo de login**:
```json
POST /auth/login
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña123"
}
```

### 📝 Gestión de Tareas

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/tasks` | Obtener todas las tareas del usuario | Sí |
| POST | `/tasks` | Crear nueva tarea | Sí |
| GET | `/tasks/:id` | Obtener tarea específica | Sí |
| PUT | `/tasks/:id` | Actualizar tarea | Sí |
| DELETE | `/tasks/:id` | Eliminar tarea | Sí |

**Ejemplo de creación de tarea**:
```json
POST /tasks
Headers: { "Authorization": "Bearer tu_jwt_token" }
{
  "title": "Completar proyecto",
  "description": "Finalizar el desarrollo de la API",
  "status": "pending",
  "priority": "high",
  "dueDate": "2024-12-31T23:59:59.000Z"
}
```

## 🗄️ Modelo de Datos

### Usuario (User)
```typescript
{
  id: number;
  email: string;
  password: string; // Encriptada
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  tasks: Task[];
}
```

### Tarea (Task)
```typescript
{
  id: number;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  user: User;
}
```

## 🔒 Seguridad

- **Autenticación JWT**: Tokens seguros con expiración configurable
- **Encriptación de contraseñas**: bcryptjs con salt rounds
- **Validación de datos**: class-validator para DTOs
- **Guards de protección**: Rutas protegidas por autenticación
- **CORS**: Configurado para el frontend

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm run test

# Ejecutar tests con coverage
npm run test:cov

# Ejecutar tests e2e
npm run test:e2e
```

## 📦 Scripts Disponibles

```bash
npm run start          # Ejecutar en producción
npm run start:dev      # Ejecutar en desarrollo con hot-reload
npm run build          # Construir para producción
npm run test           # Ejecutar tests
npm run lint           # Verificar código con ESLint
npm run format         # Formatear código con Prettier
```

## 🚀 Despliegue

### Producción

1. **Variables de entorno de producción**
2. **Base de datos PostgreSQL configurada**
3. **Construir aplicación**: `npm run build`
4. **Ejecutar**: `npm run start`

### Docker (Opcional)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 3000
CMD ["npm", "run", "start"]
```

## Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request
