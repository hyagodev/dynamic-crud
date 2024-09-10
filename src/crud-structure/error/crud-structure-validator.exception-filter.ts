import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { CrudStructureValidatorError } from "./crud-structure-validator.error";
import { Response } from 'express'

@Catch(CrudStructureValidatorError)
export class CrudStructureValidatorExceptionFilter implements ExceptionFilter<CrudStructureValidatorError> {

    catch(exception: CrudStructureValidatorError, host: ArgumentsHost) {
        host.switchToHttp().getResponse<Response>()
            .status(400)
            .json({ message: exception.message })
    }

}