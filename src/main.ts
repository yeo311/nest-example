import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true, // 정의되지 않은 항목을 막음
    transform: true // input 타입을 원하는 타입으로 변형해줌
  }));
  await app.listen(3000);
}
bootstrap();
