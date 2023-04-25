import { Optional } from "sequelize";
export interface Video {
    id: number;
    title: string;
    url: string;
    description?: string;
    published?: boolean;
    userId: number;
};

export interface VideoAttributes {
    id: number;
    title: string;
    url: string;
    description?: string;
    published?: boolean;
    userId?: number;  
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};

export interface VideoInput extends Optional<VideoAttributes, 'id'> {}
export interface VideoOuput extends Required<VideoAttributes> {}

export interface ILikeInteraction {
    id: number;
    creatorId: number;
    videoId: number;
  }
  
  export interface LikeInteractionAttributes {
    id: number;
    creatorId: number;
    videoId: number;
  }
  
  export type LikeInteractionCreationAttributes = Optional<LikeInteractionAttributes, 'id'>;