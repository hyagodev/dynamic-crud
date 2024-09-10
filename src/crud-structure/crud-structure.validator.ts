import { Injectable } from "@nestjs/common";
import { CrudStructureDTO } from "./dto/crud-structure.dto";
import { CrudStructureValidatorError } from "./error/crud-structure-validator.error";

@Injectable()
export class CrudStructureValidator {

    private static OPERATION_OPTIONS: string[] = ["create",
        "update",
        "find_by_pk",
        "find_by_filters",
        "delete"]

    private static CONSTRAINTS_NOT_ALLOWED_BY_TYPE = {
        'number': ['min_length', 'max_length'],
        'string': ['min_value', 'max_value']
    }

    private static AUTO_GENERATED_TYPES = ['number']

    private checkResource(crudStructureDTO: CrudStructureDTO) {

        for (let index = 0; index < crudStructureDTO.resource.operations.length; index++) {
            const operation = crudStructureDTO.resource.operations[index]
            if (!CrudStructureValidator.OPERATION_OPTIONS.includes(operation)) {
                throw new CrudStructureValidatorError(`the operation ${operation} is not allowed`)
            }
        }
    }

    private checkEntity(crudStructureDTO: CrudStructureDTO) {
        this.checkEntityFields(crudStructureDTO)
    }

    private checkEntityFields(crudStructureDTO: CrudStructureDTO) {
        for (let index = 0; index < crudStructureDTO.entity.fields.length; index++) {
            
            const field = crudStructureDTO.entity.fields[index]

            switch (field.definition.type) {
                case 'number':
                case 'string':
                    break;
                default:
                    throw new CrudStructureValidatorError(`the type of field [${field.name}] is unrecognized`)
            }

            if (crudStructureDTO.entity.fields.filter(f => f.name === field.name).length > 1) {
                throw new CrudStructureValidatorError(`is not allowed include more than one field with name [${field.name}]`)
            }

            for (let index = 0; index < CrudStructureValidator.CONSTRAINTS_NOT_ALLOWED_BY_TYPE[field.definition.type].length; index++) {
                const notAllowedConstraint = CrudStructureValidator.CONSTRAINTS_NOT_ALLOWED_BY_TYPE[field.definition.type][index]

                if (field.definition.constraints.findIndex(definedConstraint => definedConstraint.includes(notAllowedConstraint)) > -1) {
                    throw new CrudStructureValidatorError(`the constraint [${notAllowedConstraint}] is not allowed in type [${field.definition.type}] on field [${field.name}]`)
                }
            }

            if (field.definition.auto_generated && !CrudStructureValidator.AUTO_GENERATED_TYPES.includes(field.definition.type)) {
                throw new CrudStructureValidatorError(`the type of field [${field.name}] dont allow definition auto_generated`)
            }
        }
    }

    check(crudStructureDTO: CrudStructureDTO) {
        this.checkResource(crudStructureDTO)
        this.checkEntity(crudStructureDTO)
    }
}