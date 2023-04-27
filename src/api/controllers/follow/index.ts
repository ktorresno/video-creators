import { CreateFollowDTO } from "../../dto/user.dto";
import { FollowCreator } from "../../interfaces";
import * as mapper from '../users/mapper';
import * as service from '../../../db/services/followInteractionService';

export const follow = async(payload: CreateFollowDTO): Promise<FollowCreator> => {
    return mapper.toFollowCreator(await service.following(payload));
};

export const unfollow = async(payload: CreateFollowDTO): Promise<FollowCreator> => {
    return mapper.toFollowCreator(await service.unfollow(payload));
};