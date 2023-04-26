
import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as userDal from '../dal/user';
import { DataStoredInToken, TokenData, UserInput, UserOuput } from '../../api/interfaces';
import UserWithThatEmailAlreadyExistsException from '../../exceptions/UserWithThatEmailAlreadyExistsException';

export const register = async(userData: UserInput): Promise<UserOuput> => {
    if (await userDal.emailRegistered(userData.email))
        throw new UserWithThatEmailAlreadyExistsException(userData.email);

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await userDal.register({...userData, password: hashedPassword});
    user.password = "";

    const tokenData = createToken(user);
    user.cookie = createCookie(tokenData);
    return user;
}

export const createCookie = (tokenData: TokenData): string => {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
}

export const createToken = (user: UserOuput): TokenData => {
    // One hour as expiration time for the token
    const expiresIn = 60 * 60;
    const secret = process.env.JWT_SECRET !== undefined ? process.env.JWT_SECRET : "myhashstringsupersecret";
    const dataStoredInToken: DataStoredInToken = {
      _id: user.id.toString(),
    };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
}