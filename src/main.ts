import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './filters/GlobalExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://crookedsnouts.com',
    // origin: 'http://localhost:3000'
  });

  app.getHttpAdapter().getInstance().disable('x-powered-by');
  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(process.env.PORT || 3500);
}
bootstrap();
