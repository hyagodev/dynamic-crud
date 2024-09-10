import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CrudStructureValidatorExceptionFilter } from './crud-structure/error/crud-structure-validator.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new CrudStructureValidatorExceptionFilter())
  await app.listen(3000);
}
bootstrap();
