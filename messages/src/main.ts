import { NestFactory } from '@nestjs/core';
import { MessageModule } from './message/message.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessageModule);
  // use validation pipe
  // The ValidationPipe provides a convenient approach to enforce validation rules for all incoming client payloads.
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
