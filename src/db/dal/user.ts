import NotFoundException from "../../exceptions/NotFoundException";
import { User } from "../models";
import {UserInput, UserOuput} from '../../api/interfaces';

// SignUp user
export const register = async (payload: UserInput): Promise<UserOuput> => {
    const usr = await User.create(payload);
    return usr;
};

export const create = async (payload: UserInput): Promise<UserOuput> => {
    const [usr] = await User.findOrCreate({
        where: {
            email: payload.email
        },
        defaults: payload
    });
    return usr;
};

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOuput> => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new NotFoundException("User", id.toString());
    }
    const updatedUideo = await user.update(payload);
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

