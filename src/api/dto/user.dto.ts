// Data transfer object for User
import { Optional } from "sequelize/types"
import { CreatorType } from "../interfaces/user.interface";
export type CreateUserDTO = {
    name: string;
    email: string;
    password: string;
    creatorType?: CreatorType;
    photoUrl?: string;
    cookie?: string;
}

export type UpdateUserDTO = Optional<CreateUserDTO, 'name'>

export type FilterUsersDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}