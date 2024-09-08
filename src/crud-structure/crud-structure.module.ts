import { Module } from "@nestjs/common";
import { CrudStructureService } from "./crud-structure.service";
import { CrudStructureController } from "./crud-structure.controller";
import { CrudStructureValidator } from "./crud-structure.validator";

@Module({
    providers: [CrudStructureService, CrudStructureValidator],
    controllers: [CrudStructureController]
})
export class CrudStructureModule {

}