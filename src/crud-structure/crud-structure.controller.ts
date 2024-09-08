import { Body, Controller, Post, Res } from "@nestjs/common";
import { CrudStructureDTO } from "./dto/crud-structure.dto";
import { CrudStructureService } from "./crud-structure.service";
import { Response } from "express";

@Controller('crud_structure')
export class CrudStructureController {

    constructor(private crudStructureService: CrudStructureService) { }

    @Post()
    async create(@Body() body: CrudStructureDTO, @Res() res: Response) {
        res.status(201).send(await this.crudStructureService.create(body))
    }
}