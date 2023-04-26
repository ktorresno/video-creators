'use strict'
import { BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { LikeInteractionAttributes, LikeInteractionInput } from "../../api/interfaces/video.interface";
import { BaseModel } from "./BaseModel";
import User from "./User";
import Video from "./Video";

@Table
class LikedVideo extends BaseModel<LikeInteractionAttributes, LikeInteractionInput>
    implements LikeInteractionAttributes {

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    creatorId!: number;

    @BelongsTo(() => User, 'creatorId')
    creator?: User;

    @ForeignKey(() => Video)
    @Column(DataType.INTEGER)
    videoId!: number;

    @BelongsTo(() => Video, 'videoId')
    video?: Video;
}

export default LikedVideo;