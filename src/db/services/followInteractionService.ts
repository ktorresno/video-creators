import { FollowCreatorInput, FollowCreatorOutput } from "../../api/interfaces";
import * as followDal from '../dal/follow'

export const following = (payload: FollowCreatorInput): Promise<FollowCreatorOutput> => {
    return followDal.followingFlag(payload);
};

export const unfollow = (payload: FollowCreatorInput): Promise<FollowCreatorOutput> => {
    return followDal.unFollowFlag(payload);
};
