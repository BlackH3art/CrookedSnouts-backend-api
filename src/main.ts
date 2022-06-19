import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableCors({
  //   origin: 'https://crookedsnouts.com',
  //   origin: 'http://localhost:3000'
  // });

  app.enableCors();

  await app.listen(process.env.PORT || 3500);
}
bootstrap();
