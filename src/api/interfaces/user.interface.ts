import { Interface } from "readline";
import { Optional } from "sequelize";

export enum CreatorType {
    STUDENT = "Student",
    TEACHER = "Teacher",
};
export interface User {
    id: number;
    name?: string;
    email: string;
    password: string;
    photoUrl?: string;
    cookie?: string;
    creatorType?: CreatorType;
};
export interface UserAttributes extends User {
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};

export interface UserInput extends Optional<UserAttributes, 'id'> {};

export interface UserOuput extends Required<UserAttributes> {};

export interface FollowCreator {
    id: number;
    followedCreatorId: number;
    followerCreatorId: number;
    active?: boolean;
};

export interface FollowCreatorAttributes extends FollowCreator {};

export interface FollowCreatorInput extends Optional<FollowCreatorAttributes, 'id' | 'active'> {};

export interface FollowCreatorOutput extends Required<FollowCreatorAttributes> {};