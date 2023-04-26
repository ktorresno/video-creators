import sequelizeConnection from './config';
import { Video, User, getModels, LikedVideo, FollowCreator } from './models';
import { usersData, followCreatorsData } from './seeders/users'
import { videosData, likedVideosData } from './seeders/videos'

export const dbInit = async() => {
  await sequelizeConnection.addModels(getModels());
  sequelizeConnection.sync({ force: true })
    .then(async() => {
      await createUsers();
      await createVideos();
    })
    .then(async() => {
      await createLikedVideos();
      await createFollowers();
    });
};

const createUsers = async() => {
  await usersData.map(async(user) => {
    await User.create(user)
  });
};

const createVideos = async() => {
    await videosData.map(async(video) => {
      await Video.create(video)
  });
};

const createLikedVideos = async() => {
  await likedVideosData.map(async(likeItem) => {
    await LikedVideo.create(likeItem)
  });
};

const createFollowers = async() => {
  await followCreatorsData.map(async(following) => {
    await FollowCreator.create(following)
  });
}