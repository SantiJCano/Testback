# 🚀 Proyecto Galio - Sistema Completo de Gestión de Tareas

## 📋 Descripción General

**Proyecto Galio** es un sistema completo de gestión de tareas desarrollado con tecnologías modernas. Consta de una arquitectura separada con un backend robusto en **NestJS** y un frontend intuitivo en **React**, proporcionando una solución integral para la administración de tareas personales y profesionales.

## 🏗️ Arquitectura del Sistema

```
proyectogalio/
├── project-galio/              # 🔧 Backend API (NestJS)
│   ├── src/
│   │   ├── auth/              # Autenticación JWT
│   │   ├── users/             # Gestión de usuarios
│   │   ├── tasks/             # CRUD de tareas
│   │   └── app.module.ts      # Configuración principal
│   ├── package.json
│   └── README.md              # Documentación del backend
│
├── task-management-frontend/   # 🎨 Frontend Web (React)
│   ├── src/
│   │   ├── components/        # Componentes reutilizables
│   │   ├── services/          # Servicios de API
│   │   ├── pages/             # Páginas principales
│   │   └── App.tsx            # Componente principal
│   ├── package.json
│   └── README.md              # Documentación del frontend
│
└── README.md                  # 📖 Este archivo (documentación general)
```

## 🛠️ Stack Tecnológico

### Backend (project-galio)
- **Framework**: NestJS 10.x
- **Lenguaje**: TypeScript 5.x
- **Base de Datos**: PostgreSQL
- **ORM**: TypeORM 0.3.x
- **Autenticación**: JWT + Passport
- **Validación**: class-validator
- **Encriptación**: bcryptjs

### Frontend (task-management-frontend)
- **Framework**: React 19.x
- **Lenguaje**: TypeScript 5.x
- **Bundler**: Vite 7.x
- **Routing**: React Router DOM 7.x
- **Estilos**: CSS3 responsivo
- **Desarrollo**: Hot Module Replacement

## ✨ Características Principales

### 🔐 Sistema de Autenticación
- **Registro de usuarios** con validación completa
- **Inicio de sesión** seguro con JWT
- **Protección de rutas** en frontend y backend
- **Gestión de sesiones** con tokens de larga duración

### 📝 Gestión Completa de Tareas
- **Crear tareas** con título, descripción y fecha límite
- **Editar tareas** existentes con interfaz intuitiva
- **Eliminar tareas** con confirmación de seguridad
- **Estados de tareas**: Pendiente, En progreso, Completada
- **Prioridades**: Baja, Media, Alta
- **Filtrado y búsqueda** por diferentes criterios

### 🎨 Interfaz de Usuario Moderna
- **Diseño responsivo** para todos los dispositivos
- **Interfaz limpia** y profesional
- **Feedback visual** en tiempo real
- **Navegación intuitiva** entre secciones

## 🚀 Guía de Instalación Completa

### 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v18 o superior) - [Descargar aquí](https://nodejs.org/)
- **PostgreSQL** (v12 o superior) - [Descargar aquí](https://www.postgresql.org/download/)
- **Git** - [Descargar aquí](https://git-scm.com/)
- **Editor de código** (VS Code recomendado)

### 🗄️ Paso 1: Configuración de la Base de Datos

1. **Instalar y configurar PostgreSQL**:
   ```bash
   # En Windows (usando chocolatey)
   choco install postgresql
   
   # En macOS (usando homebrew)
   brew install postgresql
   
   # En Ubuntu/Debian
   sudo apt-get install postgresql postgresql-contrib
   ```

2. **Crear la base de datos**:
   ```bash
   # Conectar a PostgreSQL
   psql -U postgres
   
   # Crear base de datos
   CREATE DATABASE task_management;
   
   # Crear usuario (opcional)
   CREATE USER task_user WITH PASSWORD 'tu_password_seguro';
   GRANT ALL PRIVILEGES ON DATABASE task_management TO task_user;
   
   # Salir
   \q
   ```

### 🔧 Paso 2: Configuración del Backend (API)

1. **Navegar al directorio del backend**:
   ```bash
   cd project-galio
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   
   Crear archivo `.env` en la raíz de `project-galio/`:
   ```env
   # Configuración de Base de Datos
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=tu_password_de_postgres
   DATABASE_NAME=task_management
   
   # Configuración JWT
   JWT_SECRET=mi_clave_super_secreta_para_jwt_2024
   JWT_EXPIRES_IN=24h
   
   # Configuración del Servidor
   PORT=3000
   ```

4. **Ejecutar el backend**:
   ```bash
   # Modo desarrollo (con hot-reload)
   npm run start:dev
   ```

5. **Verificar que funciona**:
   - Abrir navegador en `http://localhost:3000`
   - Deberías ver un mensaje de bienvenida o estado de la API

### 🎨 Paso 3: Configuración del Frontend

1. **Abrir nueva terminal** y navegar al frontend:
   ```bash
   cd task-management-frontend
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (opcional):
   
   Crear archivo `.env` en la raíz de `task-management-frontend/`:
   ```env
   # URL del Backend
   VITE_API_URL=http://localhost:3000
   
   # Configuración de desarrollo
   VITE_DEV_MODE=true
   ```

4. **Ejecutar el frontend**:
   ```bash
   npm run dev
   ```

5. **Verificar que funciona**:
   - Abrir navegador en `http://localhost:5173`
   - Deberías ver la página de login del sistema

### ✅ Paso 4: Verificación de la Instalación

**Ambos servicios deben estar ejecutándose:**
- ✅ Backend: `http://localhost:3000`
- ✅ Frontend: `http://localhost:5173`
- ✅ Base de datos PostgreSQL conectada

## 🧪 Guía de Pruebas y Uso

### 👤 Registro y Autenticación

1. **Registrar un nuevo usuario**:
   - Ir a `http://localhost:5173`
   - Hacer clic en "Registrarse"
   - Llenar el formulario:
     ```
     Nombre: Juan
     Apellido: Pérez
     Email: juan.perez@ejemplo.com
     Contraseña: MiPassword123
     ```
   - Hacer clic en "Registrarse"

2. **Iniciar sesión**:
   - Usar las credenciales del paso anterior
   - Deberías ser redirigido a la página de tareas

### 📝 Gestión de Tareas

1. **Crear una nueva tarea**:
   - Hacer clic en "Nueva Tarea"
   - Llenar el formulario:
     ```
     Título: Completar proyecto
     Descripción: Finalizar el desarrollo de la API
     Estado: Pendiente
     Prioridad: Alta
     Fecha límite: 2024-12-31
     ```
   - Hacer clic en "Crear Tarea"

2. **Editar una tarea**:
   - Hacer clic en el botón "Editar" de cualquier tarea
   - Modificar los campos necesarios
   - Guardar cambios

3. **Cambiar estado de tarea**:
   - Usar los botones de estado: "Pendiente", "En Progreso", "Completada"

4. **Eliminar una tarea**:
   - Hacer clic en "Eliminar"
   - Confirmar la eliminación

### 🔌 Pruebas de la API (Opcional)

**Usando herramientas como Postman o curl:**

1. **Registrar usuario**:
   ```bash
   curl -X POST http://localhost:3000/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@ejemplo.com",
       "password": "password123",
       "firstName": "Test",
       "lastName": "User"
     }'
   ```

2. **Iniciar sesión**:
   ```bash
   curl -X POST http://localhost:3000/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@ejemplo.com",
       "password": "password123"
     }'
   ```
   
   **Respuesta esperada**:
   ```json
   {
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   }
   ```

3. **Obtener tareas** (usar el token del paso anterior):
   ```bash
   curl -X GET http://localhost:3000/tasks \
     -H "Authorization: Bearer TU_TOKEN_AQUI"
   ```

4. **Crear nueva tarea**:
   ```bash
   curl -X POST http://localhost:3000/tasks \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer TU_TOKEN_AQUI" \
     -d '{
       "title": "Mi primera tarea",
       "description": "Descripción de la tarea",
       "status": "pending",
       "priority": "high"
     }'
   ```

## 🚨 Solución de Problemas Comunes

### ❌ Error: "Cannot connect to database"
**Solución**:
1. Verificar que PostgreSQL esté ejecutándose
2. Comprobar credenciales en el archivo `.env`
3. Verificar que la base de datos existe

### ❌ Error: "Port 3000 already in use"
**Solución**:
1. Cambiar el puerto en `.env`: `PORT=3001`
2. O terminar el proceso que usa el puerto 3000

### ❌ Error: "CORS policy"
**Solución**:
1. Verificar que el backend esté ejecutándose
2. Comprobar la URL en el archivo `.env` del frontend

### ❌ Frontend no se conecta al backend
**Solución**:
1. Verificar que ambos servicios estén ejecutándose
2. Comprobar la configuración de `VITE_API_URL`
3. Revisar la consola del navegador para errores

## 📱 Acceso desde Otros Dispositivos

### En la misma red local:

1. **Obtener IP local**:
   ```bash
   # Windows
   ipconfig
   
   # macOS/Linux
   ifconfig
   ```

2. **Configurar backend para aceptar conexiones externas**:
   En `project-galio/src/main.ts`, agregar:
   ```typescript
   app.enableCors({
     origin: '*', // Solo para desarrollo
     credentials: true,
   });
   ```

3. **Acceder desde otro dispositivo**:
   - Backend: `http://TU_IP_LOCAL:3000`
   - Frontend: `http://TU_IP_LOCAL:5173`

## 🔄 Comandos de Mantenimiento

```bash
# Reiniciar servicios
ctrl + C  # Detener servicio actual
npm run start:dev  # Reiniciar

# Limpiar caché de npm
npm cache clean --force

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Ver logs de base de datos
# En PostgreSQL
psql -U postgres -d task_management
SELECT * FROM "user";
SELECT * FROM task;
```

## 📡 API Endpoints Principales

### Autenticación
- `POST /auth/register` - Registro de usuario
- `POST /auth/login` - Inicio de sesión

### Gestión de Tareas
- `GET /tasks` - Obtener todas las tareas
- `POST /tasks` - Crear nueva tarea
- `PUT /tasks/:id` - Actualizar tarea
- `DELETE /tasks/:id` - Eliminar tarea

## 🗄️ Modelo de Datos

### Usuario
```typescript
{
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string; // Encriptada
  tasks: Task[];
}
```

### Tarea
```typescript
{
  id: number;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  userId: number;
}
```

## 🔧 Configuración de Desarrollo

### Variables de Entorno

**Backend (.env)**:
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=tu_usuario
DATABASE_PASSWORD=tu_contraseña
DATABASE_NAME=task_management
JWT_SECRET=tu_clave_secreta_muy_segura
PORT=3000
```

**Frontend (.env)**:
```env
VITE_API_URL=http://localhost:3000
```

### Scripts Útiles

**Backend**:
```bash
npm run start:dev    # Desarrollo con hot-reload
npm run build        # Construir para producción
npm run test         # Ejecutar tests
```

**Frontend**:
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción
npm run lint         # Verificar código
```

## 🚀 Despliegue en Producción

### Backend
1. Configurar base de datos PostgreSQL en producción
2. Establecer variables de entorno de producción
3. Construir aplicación: `npm run build`
4. Ejecutar: `npm run start`

### Frontend
1. Configurar URL del backend en producción
2. Construir aplicación: `npm run build`
3. Servir archivos estáticos desde carpeta `dist/`

### Opciones de Hosting
- **Backend**: Heroku, Railway, DigitalOcean, AWS
- **Frontend**: Netlify, Vercel, GitHub Pages
- **Base de datos**: PostgreSQL en la nube (Supabase, Railway, etc.)

## 🔒 Seguridad

- **Autenticación JWT** con tokens seguros
- **Encriptación de contraseñas** con bcryptjs
- **Validación de datos** en backend y frontend
- **Protección CORS** configurada
- **Rutas protegidas** con guards de autenticación

## 🧪 Testing

```bash
# Backend
cd project-galio
npm run test        # Tests unitarios
npm run test:e2e    # Tests end-to-end

# Frontend
cd task-management-frontend
npm run lint        # Verificación de código
npm run build       # Verificar construcción
```

## 📊 Guía de Evaluación del Proyecto

### 🔍 Puntos Clave para Revisar

#### 🏗️ Arquitectura y Estructura
- **✅ Separación clara**: Backend (NestJS) y Frontend (React) independientes
- **✅ Organización modular**: Código organizado en módulos y componentes
- **✅ Tipado fuerte**: TypeScript en ambos proyectos
- **✅ Configuración profesional**: Variables de entorno, linting, etc.

#### 🔒 Seguridad Implementada
- **✅ Autenticación JWT**: Tokens seguros con expiración
- **✅ Encriptación**: Contraseñas hasheadas con bcrypt
- **✅ Validación**: Datos validados en backend y frontend
- **✅ Rutas protegidas**: Acceso controlado a funcionalidades

#### 📡 Funcionalidades Completas
- **✅ CRUD completo**: Crear, leer, actualizar, eliminar tareas
- **✅ Gestión de usuarios**: Registro e inicio de sesión
- **✅ Estados de tareas**: Pendiente, En progreso, Completada
- **✅ Prioridades**: Baja, Media, Alta
- **✅ Interfaz responsiva**: Funciona en móvil y desktop

### 📝 Lista de Verificación para Pruebas

#### Backend API (✅ Marcar al probar)
- [ ] El servidor inicia correctamente en puerto 3000
- [ ] Se conecta a la base de datos PostgreSQL
- [ ] Endpoint de registro funciona: `POST /auth/register`
- [ ] Endpoint de login funciona: `POST /auth/login`
- [ ] Endpoints de tareas requieren autenticación
- [ ] CRUD de tareas funciona completamente
- [ ] Validación de datos funciona (campos requeridos)
- [ ] Manejo de errores apropiado

#### Frontend Web (✅ Marcar al probar)
- [ ] La aplicación carga correctamente en puerto 5173
- [ ] Formulario de registro funciona
- [ ] Formulario de login funciona
- [ ] Redirección automática después del login
- [ ] Lista de tareas se muestra correctamente
- [ ] Crear nueva tarea funciona
- [ ] Editar tarea existente funciona
- [ ] Eliminar tarea funciona (con confirmación)
- [ ] Cambio de estados de tarea funciona
- [ ] Logout funciona correctamente
- [ ] Interfaz responsiva (probar en móvil)

#### Integración (✅ Marcar al probar)
- [ ] Frontend se comunica correctamente con backend
- [ ] Tokens JWT se manejan correctamente
- [ ] Errores de API se muestran en frontend
- [ ] Datos se persisten en base de datos
- [ ] Sesión se mantiene al recargar página

### 📊 Casos de Prueba Sugeridos

1. **Flujo completo de usuario nuevo**:
   - Registrarse → Login → Crear tarea → Editar → Completar → Eliminar

2. **Validación de seguridad**:
   - Intentar acceder a `/tasks` sin login
   - Usar credenciales incorrectas
   - Probar con campos vacíos

3. **Persistencia de datos**:
   - Crear tareas → Cerrar navegador → Volver a entrar → Verificar que existen

4. **Responsividad**:
   - Probar en diferentes tamaños de pantalla
   - Verificar usabilidad en móvil

### 📈 Métricas de Calidad

- **📝 Código limpio**: Bien estructurado y comentado
- **🔒 Seguridad**: Implementación robusta de autenticación
- **🎨 UX/UI**: Interfaz intuitiva y moderna
- **🚀 Performance**: Carga rápida y respuesta fluida
- **📱 Responsividad**: Funciona en todos los dispositivos
- **📄 Documentación**: Completa y fácil de seguir

### 📞 Contacto para Soporte

Si encuentra algún problema durante la evaluación:
1. Revisar la sección "Solución de Problemas Comunes"
2. Verificar que todos los prerrequisitos estén instalados
3. Contactar al desarrollador para asistencia

## 📚 Documentación Detallada

Para información más específica, consulta la documentación de cada módulo:

- **[Backend Documentation](./project-galio/README.md)** - Documentación completa del API
- **[Frontend Documentation](./task-management-frontend/README.md)** - Documentación de la interfaz

## 🤝 Contribución

1. **Fork** el proyecto
2. **Crear rama** feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Crear Pull Request**

### Guías de Contribución
- Seguir las convenciones de código establecidas
- Agregar tests para nuevas funcionalidades
- Actualizar documentación cuando sea necesario
- Usar commits descriptivos y claros

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo de Desarrollo

- **Backend**: Desarrollado con NestJS y TypeScript
- **Frontend**: Desarrollado con React y TypeScript
- **Base de datos**: PostgreSQL con TypeORM

*Para comenzar, sigue la guía de [Inicio Rápido](#-inicio-rápido) y consulta la documentación específica de cada módulo.*
