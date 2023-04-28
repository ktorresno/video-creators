import isEmail from 'validator/lib/isEmail';
import { LogInDto } from '../api/dto/login.dto';
import { CreateFollowDTO } from '../api/dto/user.dto';

export const checkEmail = (str: string) => str && isEmail(str);

export const checkCredentials = (data: LogInDto) => {
    // let flag = true;
    const errors = {
        email: '',
        password: '',
        password_confirmation: ''
    };
};

export const checkFollowed =
    (data: CreateFollowDTO) =>
        data.followedCreatorId === data.followerCreatorId;
