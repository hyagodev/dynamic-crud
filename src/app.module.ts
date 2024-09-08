import { Module } from '@nestjs/common';
import { CrudStructureModule } from './crud-structure/crud-structure.module';

@Module({
  imports: [CrudStructureModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
