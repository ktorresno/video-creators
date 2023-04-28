'use strict';

import { CreatorType } from "../../api/interfaces/user.interface";

export const usersData = [
  {
    name: 'July Doe',
    password: '12345',
    email: 'test.admin@gmail.com',
    creatorType: CreatorType.TEACHER,
    photoUrl: 'https://www.pinterest.com/pin/1122170432127908789/',
  }, {
    name: 'Sartf Tall',
    password: '12345',
    email: 'sartf.tall@gmail.com',
    creatorType: CreatorType.STUDENT,
    photoUrl: 'https://www.pinterest.com/pin/258253359865685038/',
  }, {
    name: 'Raba Girl',
    password: '12345',
    email: 'girl45@gmail.com',
    creatorType: CreatorType.STUDENT,
    photoUrl: 'https://www.pinterest.com/pin/258253359865685038/',
  }, {
    name: 'Firas Hoah',
    password: '12345',
    email: 'fhoah11@gmail.com',
    creatorType: CreatorType.TEACHER,
    photoUrl: 'https://www.pinterest.com/pin/258253359865685038/',
  }
];

 export const followCreatorsData = [
  {
    followedCreatorId: 2,
    followerCreatorId: 1
  }, {
    followedCreatorId: 3,
    followerCreatorId: 1
  }, {
    followedCreatorId: 1,
    followerCreatorId: 2
  }, {
    followedCreatorId: 3,
    followerCreatorId: 2
  }
];