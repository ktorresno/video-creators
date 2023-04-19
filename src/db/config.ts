import 'dotenv/config';
import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

const isTest = process.env.NODE_ENV === 'test';

const dbName = isTest ? process.env.TEST_PG_DB as string : process.env.PG_DB as string;
const dbUser = process.env.PG_USER;
const dbHost = process.env.PG_HOST;
const dbPassword = process.env.PG_PASSWORD;
const dbDriver = process.env.PG_DRIVER || 'postgres';
const dbPort = 5432;

export const development = {
    database: dbName,
    username: dbUser as string,
    password: dbPassword,
    // Defaults for Postgres
    host: dbHost,
    port: dbPort,
    dialect: dbDriver as Dialect,
    logging: false
};

const sequelizeConnection = new Sequelize(
   development.database,
   development.username,
   development.password,
   {
        host: development.host,
        dialect: development.dialect,
        logging: development.logging,
        dialectOptions: {
            multipleStatements: true
        }
   }
);

export default sequelizeConnection;