import sequelizeConnection from './config';
import { Video, User } from './models';
import { usersData } from './seeders/users'
import { videosData } from './seeders/videos'

export const dbInit = async() => {
  await sequelizeConnection.addModels(getModels());
  sequelizeConnection.sync({ force: true })
    .then(() => populateTables());
};

const getModels = () => [User, Video];

const populateTables = () => {
   createUsers();
   createVideos();
};

const createUsers = () => {
  usersData.map(async(user) => {
    await User.create(user)
  });
};

const createVideos = () => {
  videosData.map(async(video) => {
    await Video.create(video)
  });
};