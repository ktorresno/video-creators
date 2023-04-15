import { Router } from 'express';
import videosRouter from './videos';
import authRouter from './authentication';

const router = Router();

router.use('/videos', videosRouter);
router.use('/signup', authRouter);


export default router;
