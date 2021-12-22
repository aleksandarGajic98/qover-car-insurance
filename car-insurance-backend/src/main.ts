import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { FrontendUrl, Port } from './consts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [FrontendUrl],
  });

  await app.listen(Port);
}
bootstrap();
