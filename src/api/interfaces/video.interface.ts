import { User } from "./user.interface";

export interface Video {
    id: number;
    title: string;
    url: string;
    description?: string;
    published?: boolean;
    creator?: User;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
};