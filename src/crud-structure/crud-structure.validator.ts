import { Injectable } from "@nestjs/common";
import { CrudStructureDTO } from "./dto/crud-structure.dto";

@Injectable()
export class CrudStructureValidator {

    private static OPERATION_OPTIONS: string[] = ["create",
        "update",
        "find_by_pk",
        "find_by_filters",
        "delete"]

    private checkResource(crudStructureDTO: CrudStructureDTO) {
        if (crudStructureDTO.resource.operations
            .find(operation => !CrudStructureValidator.OPERATION_OPTIONS.includes(operation))) {
                //throw error
        }
    }

    private checkEntity(crudStructureDTO: CrudStructureDTO) {
        
    }

    check(crudStructureDTO: CrudStructureDTO) {



    }
}