import Video from './Video';
import User from './User';
import LikedVideo from './LikedVideo';
import FollowCreator from './FollowCreator';

export const getModels = () => [User, Video, LikedVideo, FollowCreator];

export { Video, User, LikedVideo, FollowCreator };