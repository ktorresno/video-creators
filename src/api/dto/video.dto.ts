// Data transfer object
import { Optional } from "sequelize/types"
export type CreateVideoDTO = {
    title: string;
    url: string;
    description?: string;
    published: boolean;
}

export type UpdateVideoDTO = Optional<CreateVideoDTO, 'title'>

export type FilterVideosDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}