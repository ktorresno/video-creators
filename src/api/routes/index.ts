import { Router } from 'express';
import videosRouter from './videos';
import authRouter from './authentication';
import { followRouter, unfollowRouter } from './followInteractions';

const router = Router();

router.use('/videos', videosRouter);
router.use('/signup', authRouter);
router.use('/following', followRouter);
router.use('/unfollow', unfollowRouter);

export default router;