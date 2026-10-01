import 'reflect-metadata';
import 'dotenv/config';
import * as fs from 'fs';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./openapi.json', JSON.stringify(document, null, 2));
  SwaggerModule.setup('api/docs', app, document);

  // Use environment PORT if provided, otherwise let the OS pick a free port (0)
  const desiredPort = process.env.PORT ? Number(process.env.PORT) : 0;
  await app.listen(desiredPort);

  // After listening, get the actual bound port and print full URLs
  const server = app.getHttpServer();
  // server.address() may return AddressInfo or string depending on platform
  // use a safe check to extract port
  const addr: any = server.address && server.address();
  const actualPort = addr && typeof addr === 'object' && 'port' in addr ? addr.port : desiredPort;

  console.log(`Application is running on: http://localhost:${actualPort}`);
  console.log(`Swagger docs: http://localhost:${actualPort}/api/docs`);
}

bootstrap();
