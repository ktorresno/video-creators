import 'dotenv/config';
import { Video, User } from './models';

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

const dbInit = async() => {
    await Video.sync({ alter: isDev || isTest });
    await User.sync({ alter: isDev || isTest });
}

export default dbInit;