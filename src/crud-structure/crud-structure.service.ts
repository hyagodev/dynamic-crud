import { Injectable } from "@nestjs/common";
import { CrudStructureDTO } from "./dto/crud-structure.dto";
import { CrudStructureValidator } from "./crud-structure.validator";

@Injectable()
export class CrudStructureService {

    constructor(private crudStructureValidator: CrudStructureValidator) { }

    create(crud: CrudStructureDTO): Promise<CrudStructureDTO> {
        return new Promise<CrudStructureDTO>((res, _) => {
            this.crudStructureValidator.check(crud)
            res(crud)
        })
    }
}