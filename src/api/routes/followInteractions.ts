import { NextFunction, Request, Response, Router } from "express";
import { HttpCode } from "../../exceptions/HttpException";
import { controlledException } from "../../utils/catchErrors";
import { follow, unfollow } from "../controllers/follow";
import { CreateFollowDTO } from "../dto/user.dto";

const followRouter = Router();

followRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload: CreateFollowDTO = req.body;
        const result = await follow(payload);

        return res.status(HttpCode.OK).send(result);
    } catch (error) {
        next(controlledException(error));
    }
});

const unfollowRouter = Router();
unfollowRouter.put('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload: CreateFollowDTO = req.body;
        const result = await unfollow(payload);

        return res.status(HttpCode.OK).send(result);
    } catch (error) {
        next(controlledException(error));
    }
});

export { followRouter, unfollowRouter };