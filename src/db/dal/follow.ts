import {
    FollowCreatorInput, FollowCreatorOutput
} from "../../api/interfaces";
import { FollowCreator, User } from "../models";
import NotFoundException from "../../exceptions/NotFoundException";

export const followingFlag = async (payload: FollowCreatorInput): Promise<FollowCreatorOutput> => {
    const creatorFollower = await User.findByPk(payload.followerCreatorId);
    if (!creatorFollower) {
        throw new NotFoundException("Follower creator", payload.followerCreatorId.toString());
    }
    const creatorFollowed = await User.findByPk(payload.followedCreatorId);
    if (!creatorFollowed) {
        throw new NotFoundException("Followed creator", payload.followedCreatorId.toString());
    }
    // Try to create if doesn't exist, otherwise update the active flag
    return await FollowCreator.findOrCreate({
        where: {
            followedCreatorId: payload.followedCreatorId,
            followerCreatorId: payload.followerCreatorId,
        },
        defaults: payload
    }).then(([foundFollowingRecord, created]) => {
        if (!created) {
            // If already registered but inactive
            if (!foundFollowingRecord.active) {
                const updated = foundFollowingRecord.update(
                    { active: true },
                    { where: { id: foundFollowingRecord.id } }
                );
                return updated;
            }
        }
        return foundFollowingRecord;
    });
};

export const unFollowFlag = async (payload: FollowCreatorInput): Promise<FollowCreatorOutput> => {
    const creatorFollower = await User.findByPk(payload.followerCreatorId);
    if (!creatorFollower) {
        throw new NotFoundException("Follower creator", payload.followerCreatorId.toString());
    }
    const creatorFollowed = await User.findByPk(payload.followedCreatorId);
    if (!creatorFollowed) {
        throw new NotFoundException("Followed creator", payload.followedCreatorId.toString());
    }
    // Try to create if doesn't exist, otherwise update the active flag
    return await FollowCreator.findOne({
        where: {
            followedCreatorId: payload.followedCreatorId,
            followerCreatorId: payload.followerCreatorId,
        }
    }).then((foundFollowingRecord) => {
        if (foundFollowingRecord) {
            // If indeed the follower is following the creator followed
            if (foundFollowingRecord.active) {
                const updated = foundFollowingRecord.update(
                    { active: false },
                    { where: { id: foundFollowingRecord.id } }
                );
                return updated;
            }
        } else {
            throw new NotFoundException("'following relation' between these creators to unfollow",
            `Following: ${payload.followedCreatorId.toString()} | Follower: ${payload.followerCreatorId.toString()}`);
        }
        // The follower already unfollows the creator specified.
        return foundFollowingRecord;
    });
};