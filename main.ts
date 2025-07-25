import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Habilitar CORS para desarrollo y producción con configuración robusta
  app.enableCors({
    origin: (origin, callback) => {
      // Permitir solicitudes sin origin (como Postman, apps móviles, etc.)
      if (!origin) return callback(null, true);
      
      const allowedOrigins = [
        'http://localhost:5173',
        'http://localhost:3000',
        'https://test-front-fcwugvfhe-santijcanos-projects.vercel.app',
        'https://test-front-obn25yjm1-santijcanos-projects.vercel.app',
      ];
      
      const allowedPatterns = [
        /\.vercel\.app$/,
        /\.netlify\.app$/,
        /\.onrender\.com$/,
      ];
      
      // Verificar si el origin está en la lista permitida
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      
      // Verificar si el origin coincide con algún patrón
      if (allowedPatterns.some(pattern => pattern.test(origin))) {
        return callback(null, true);
      }
      
      // Si no coincide, rechazar
      callback(new Error('No permitido por CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
      'Content-Type', 
      'Authorization', 
      'Accept', 
      'Origin', 
      'X-Requested-With',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Methods'
    ],
    exposedHeaders: ['Access-Control-Allow-Origin'],
    preflightContinue: false,
    optionsSuccessStatus: 200,
  });

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  console.log('🚀 Servidor corriendo en http://localhost:3000');
}
bootstrap();