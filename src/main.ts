import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const port = Number(process.env.PORT) || 8080;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(port);
  console.log(`Application running at ${await app.getUrl()}`)
}
bootstrap();
