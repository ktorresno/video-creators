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

export type VideoInput = Optional<VideoAttributes, 'id'>;

export type VideoOuput = Required<VideoAttributes>;

export interface LikeInteraction {
    id: number;
    creatorId: number;
    videoId: number;
};

export type LikeInteractionAttributes = LikeInteraction;

export type LikeInteractionInput = Optional<LikeInteractionAttributes, 'id'>;