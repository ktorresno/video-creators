require('dotenv').config();

import { Video } from './models';

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';


const dbInit = async() => { 
    await Video.sync({ alter: isDev || isTest });
    console.log(`After Video.sync isDev= ${isDev}  isTest= ${isTest}`);
}

export default dbInit;