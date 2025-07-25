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

  // Habilitar CORS para desarrollo
  app.enableCors();

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  console.log('🚀 Servidor corriendo en http://localhost:3000');
}
bootstrap();