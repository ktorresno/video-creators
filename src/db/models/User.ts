'use strict'
import { DataTypes } from 'sequelize';
import { AllowNull, AutoIncrement, Column, Default, HasMany,
   PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { CreatorType, UserInput, UserAttributes } from '../../api/interfaces';
import { BaseModel } from './BaseModel';
import Video from './Video';

@Table
class User extends BaseModel<UserAttributes, UserInput>
  implements UserAttributes {
    @PrimaryKey
    @AutoIncrement
    @Column(DataTypes.INTEGER)
    id!: number;

    @Column(DataTypes.STRING)
    name!: string;

    @AllowNull(false)
    @Unique
    @Column(DataTypes.STRING)
    email!: string;

    @AllowNull(false)
    @Column(DataTypes.STRING)
    password!: string;

    @Default(CreatorType.STUDENT)
    @Column(DataTypes.ENUM(CreatorType.STUDENT, CreatorType.TEACHER))
    creatorType!: CreatorType;

    @Column(DataTypes.STRING)
    photoUrl!: string;

    @Column(DataTypes.STRING)
    cookie!: string;

    @HasMany(() => Video)
    videos?: Video[];
};

export default User;