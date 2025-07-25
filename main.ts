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

  // Habilitar CORS para desarrollo y producción
  app.enableCors({
    origin: [
      'http://localhost:5173', // Vite dev server
      'http://localhost:3000', // Desarrollo local
      'https://test-front-fcwugvfhe-santijcanos-projects.vercel.app', // Frontend en Vercel
      /\.vercel\.app$/, // Cualquier subdominio de Vercel
      /\.onrender\.com$/, // Cualquier subdominio de Render
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  console.log('🚀 Servidor corriendo en http://localhost:3000');
}
bootstrap();