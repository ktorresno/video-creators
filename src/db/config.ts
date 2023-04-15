import 'dotenv/config';
import { Dialect, Sequelize } from 'sequelize';

const isTest = process.env.NODE_ENV === 'test';

const dbName = isTest ? process.env.TEST_PG_DB as string : process.env.PG_DB as string;
const dbUser = process.env.PG_USER as string;
const dbHost = process.env.PG_HOST;
const dbPassword = process.env.PG_PASSWORD;
const dbDriver = process.env.PG_DRIVER as Dialect;

const sequelizeConnection = new Sequelize(
    dbName,
    dbUser,
    dbPassword,
    {
        host: dbHost,
        dialect: dbDriver,
        logging: false
    }
);

export default sequelizeConnection;