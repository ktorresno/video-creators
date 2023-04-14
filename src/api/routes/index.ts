import { Router } from 'express';
import videosRouter from './videos';

const router = Router();

router.use('/videos', videosRouter);


export default router;
