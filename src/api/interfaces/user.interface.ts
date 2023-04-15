export enum CreatorType {
    STUDENT = 1,
    TEACHER = 2,
}

export interface User {
    id: number;
    name?: string;
    email: string;
    password: string;
    photoUrl?: string;
    cookie?: string;
    creatorType?: CreatorType;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};
