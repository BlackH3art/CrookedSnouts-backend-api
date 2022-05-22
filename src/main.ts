import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(process.env.PORT || 3500);
}
bootstrap();
