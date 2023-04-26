'use strict'
import { AllowNull, Column, DataType, Default, HasMany, Table, Unique } from 'sequelize-typescript';
import { CreatorType, UserInput, UserAttributes } from '../../api/interfaces';
import { BaseModel } from './BaseModel';
import FollowCreator from './FollowCreator';
import LikedVideo from './LikedVideo';
import Video from './Video';

@Table
class User extends BaseModel<UserAttributes, UserInput>
  implements UserAttributes {

  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @Default(CreatorType.STUDENT)
  @Column(DataType.ENUM(CreatorType.STUDENT, CreatorType.TEACHER))
  creatorType!: CreatorType;

  @Column(DataType.STRING)
  photoUrl!: string;

  @Column(DataType.STRING)
  cookie!: string;

  @HasMany(() => Video, 'userId')
  videos?: Video[];

  @HasMany(() => FollowCreator, 'followerCreatorId')
  followers?: FollowCreator[];

  @HasMany(() => FollowCreator, 'followedCreatorId')
  followed?: FollowCreator[];

  @HasMany(() => LikedVideo, 'creatorId')
  likedVideos?: LikedVideo[];
};

export default User;