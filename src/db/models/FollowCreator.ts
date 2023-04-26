'use strict'
import { BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { FollowCreatorAttributes, FollowCreatorInput } from "../../api/interfaces/user.interface";
import { BaseModel } from "./BaseModel";
import User from "./User";

@Table
class FollowCreator extends BaseModel<FollowCreatorAttributes, FollowCreatorInput>
    implements FollowCreatorAttributes {

        @ForeignKey(() => User)
        @Column({
            type: DataType.INTEGER,
            allowNull: false
        })
        followedCreatorId!: number;

        @BelongsTo(() => User, 'followedCreatorId')
        followed!: User;

        @ForeignKey(() => User)
        @Column({
            type: DataType.INTEGER,
            allowNull: false
        })
        followerCreatorId!: number;

        @BelongsTo(() => User, 'followerCreatorId')
        follower!: User;
};

export default FollowCreator;