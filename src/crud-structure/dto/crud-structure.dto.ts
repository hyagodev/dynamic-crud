interface CrudStructureResourceDTO {
    name: string
    operations: string[]
}

interface CrudStructureEntityConfigDTO {
    logical_delete: boolean
}

interface CrudStructureEntityFieldDefinitionDTO {
    type: string
    read_only: boolean
    auto_generated: boolean
    constraints: string[]
}

interface CrudStructureEntityFieldDTO {
    name: string
    definition: CrudStructureEntityFieldDefinitionDTO
}

interface CrudStructureEntityDTO {
    name: string
    config: CrudStructureEntityConfigDTO
    fields: CrudStructureEntityFieldDTO[]
}

export interface CrudStructureDTO {
    resource: CrudStructureResourceDTO
    entity: CrudStructureEntityDTO[]
}