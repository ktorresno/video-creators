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

export type UserInput = Optional<UserAttributes, 'id'>;

export type UserOuput = Required<UserAttributes>;

export interface FollowCreator {
    id: number;
    followedCreatorId: number;
    followerCreatorId: number;
    active?: boolean;
};

export type FollowCreatorAttributes = FollowCreator;

export type FollowCreatorInput = Optional<FollowCreatorAttributes, 'id' | 'active'>;

export type FollowCreatorOutput = Required<FollowCreatorAttributes>;