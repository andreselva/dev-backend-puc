import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('🚀 HTTP API rodando na porta 3000');

  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3001, // Diferente da API principal
    },
  });
  await microservice.listen();
  console.log('🔌 Microserviço rodando na porta 3001');
}

bootstrap();
