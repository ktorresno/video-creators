import { CreateUserDTO } from "../../dto/user.dto";
import { User } from "../../interfaces";
import * as mapper from './mapper';
import * as service from '../../../db/services/authenticationService';

export const register = async(payload: CreateUserDTO): Promise<User> => {
    return mapper.toUser(await service.register(payload));
}