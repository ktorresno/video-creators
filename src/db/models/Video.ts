import { AllowNull, AutoIncrement, BelongsTo, Column, Default,
   ForeignKey, IsUrl, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { VideoAttributes, VideoInput } from '../../api/interfaces';
import { BaseModel } from './BaseModel';
import User from './User';

@Table
class Video extends BaseModel<VideoAttributes, VideoInput>
 implements VideoAttributes {
    @PrimaryKey
    @AutoIncrement
    @Column(DataTypes.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataTypes.STRING)
    title!: string;

    @IsUrl
    @AllowNull(false)
    @Unique
    @Column(DataTypes.STRING)
    url!: string;

    @Default(false)
    @Column(DataTypes.BOOLEAN)
    published!: boolean;

    @Column(DataTypes.TEXT)
    description!: string;

    @ForeignKey(() => User)
    @Column(DataTypes.INTEGER)
    userId!: number;

    @BelongsTo(() => User, 'userId')
    user?: User;
}

export default Video;