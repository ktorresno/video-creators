import { Optional } from "sequelize";
export interface Video {
    id: number;
    title: string;
    url: string;
    description?: string;
    published?: boolean;
    userId: number;
};

export interface VideoAttributes extends Video {
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};

export interface VideoInput extends Optional<VideoAttributes, 'id'> {};

export interface VideoOuput extends Required<VideoAttributes> {};

export interface LikeInteraction {
    id: number;
    creatorId: number;
    videoId: number;
};

export interface LikeInteractionAttributes extends LikeInteraction {};

export type LikeInteractionInput = Optional<LikeInteractionAttributes, 'id'>;