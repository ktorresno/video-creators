import 'dotenv/config';
import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

const isTest = process.env.NODE_ENV === 'test';

const dbName = isTest ? process.env.TEST_PG_DB as string : process.env.PG_DB as string;
const dbUser = process.env.PG_USER;
const dbHost = process.env.PG_HOST;
const dbPassword = process.env.PG_PASSWORD;
const dbDriver = process.env.PG_DRIVER || 'postgres';

const sequelizeConnection = new Sequelize(
   dbName,
   dbUser as string,
   dbPassword,
   {
        host: dbHost,
        dialect: dbDriver as Dialect,
        logging: false,
        dialectOptions: {
            multipleStatements: true
        }
   }
);

export default sequelizeConnection;