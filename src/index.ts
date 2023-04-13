import express, { Application, Request, Response, NextFunction, ErrorRequestHandler, Errback } from 'express';
import routes from './api/routes';
import dbInit from './db/init';
import dotenv from 'dotenv';
//import sequelizeConnection from './db/config';
dotenv.config();

const port = process.env.PORT;
console.log('index.ts PORT: '+ port);

export const get = () => { 
  const app: Application = express();

  // Body parsing Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // CORS config Middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    /*
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      if (req.method === "OPTIONS") {
        return res.sendStatus(200);
      }
    */
    next();
  });

  app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the video creators API! \n Endpoints available at http://localhost:${port}/api/v1` });
  });

  app.use('/api/v1', routes);

  // Error handling
  /*app.use((error, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    const status = error.status || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });*/

  return app;
};

export const start = async() => {
  const app = get();
  try {
    await dbInit();
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};

start();
