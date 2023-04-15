// Data transfer object
import { Optional } from "sequelize/types"
import { User } from "../interfaces";
export type CreateVideoDTO = {
    title: string;
    url: string;
    description?: string;
    published: boolean;
    creator: User;
}

export type UpdateVideoDTO = Optional<CreateVideoDTO, 'title'>

export type FilterVideosDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}