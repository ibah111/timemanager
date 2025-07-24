import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getSwaggerOptions, getSwaggerOptionsCustom } from './utils/swagger';
import { Logger } from '@nestjs/common';
import { PORT } from './utils/consts';

async function bootstrap() {
  const logger = new Logger(bootstrap.name);

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Стартер-приложение')
    .setDescription('Стартер-приложение для "Избранных"')
    .build();
  const document = SwaggerModule.createDocument(
    app,
    config,
    getSwaggerOptions(),
  );
  SwaggerModule.setup('docs', app, document, getSwaggerOptionsCustom());

  await app.listen(PORT, '0.0.0.0');
  const service_url = await app.getUrl();
  logger.debug(`Application started on ${service_url}/docs`);
}
bootstrap();
