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

  // Configuración CORS simplificada y permisiva
  app.enableCors({
    origin: true, // Permitir todos los orígenes temporalmente para debug
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['*'],
    optionsSuccessStatus: 200,
  });

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  console.log('🚀 Servidor corriendo en http://localhost:3000');
}
bootstrap();