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
};

export type UpdateUserDTO = Optional<CreateUserDTO, 'name'| 'photoUrl'>;

export type FilterUsersDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
};

export type CreateFollowDTO = {
    followedCreatorId: number;
    followerCreatorId: number;
    active?: boolean;
};

export type UpdateFollowDTO = Optional<CreateFollowDTO, 'active'>;
