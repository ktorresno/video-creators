import { Optional } from "sequelize";

export enum CreatorType {
    STUDENT = "Student",
    TEACHER = "Teacher",
}
export interface User {
    id: number;
    name?: string;
    email: string;
    password: string;
    photoUrl?: string;
    cookie?: string;
    creatorType?: CreatorType;
};
export interface UserAttributes {
    id: number;
    name?: string;
    password: string;
    email: string;
    creatorType?: CreatorType;
    photoUrl?: string;
    cookie?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {}

export interface UserOuput extends Required<UserAttributes> {}