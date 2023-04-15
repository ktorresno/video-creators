import NotFoundException from "../../exceptions/NotFoundException";
import { User } from "../models";
import {UserInput, UserOuput} from '../models/User';

// SignUp user
export const register = async (playload: UserInput): Promise<UserOuput> => {
    const usr = await User.create(playload);
    return usr;
};

export const create = async (playload: UserInput): Promise<UserOuput> => {
    const [usr] = await User.findOrCreate({
        where: {
            email: playload.email
        },
        defaults: playload
    });
    return usr;
};

export const update = async (id: number, playload: Partial<UserInput>): Promise<UserOuput> => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new NotFoundException("User", id.toString());
    }
    const updatedUideo = await user.update(playload);
    return updatedUideo;
};


export const getById = async (id: number): Promise<UserOuput> => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new NotFoundException("User", id.toString());
    }
    return user;
}

export const emailRegistered = async (email: string): Promise<boolean> => {
    const user = await User.findOne({
        where: { email }
    });
    return !!user;
}

