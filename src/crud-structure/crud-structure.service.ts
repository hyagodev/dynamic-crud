import { Injectable } from "@nestjs/common";
import { CrudStructureDTO } from "./dto/crud-structure.dto";

@Injectable()
export class CrudStructureService {

    create(crud: CrudStructureDTO): Promise<CrudStructureDTO> {
        return new Promise<CrudStructureDTO>((res, rej) => {
            res(crud)
        })
    }
}