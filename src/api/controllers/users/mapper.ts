import { User, UserOuput, FollowCreator, FollowCreatorOutput } from '../../interfaces';

export const toUser = (user: UserOuput): User => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        photoUrl: user.photoUrl,
        cookie: user.cookie,
        creatorType: user.creatorType
    };
};

export const toFollowCreator = (creator: FollowCreatorOutput): FollowCreator => {
    return {
        id: creator.id,
        followerCreatorId: creator.followerCreatorId,
        followedCreatorId: creator.followedCreatorId,
        active: creator.active
    };
};