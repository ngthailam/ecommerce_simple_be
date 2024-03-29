import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ResponseTransformInterceptor } from './core/response_transform_interceptor';
import { ExcludeNullInterceptor } from './core/exclude_null_interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ecommerce Simple')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalInterceptors(
    new ExcludeNullInterceptor(),
    new ResponseTransformInterceptor(),
  );

  await app.listen(3000);
}
bootstrap();
