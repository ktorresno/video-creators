import 'express-async-errors';
import { Router, Request, Response, NextFunction } from 'express';
import { UniqueConstraintError } from 'sequelize';
import { HttpCode } from '../../exceptions/HttpException';
import UniqueConstrainException from '../../exceptions/UniqueConstrainException';
import { CreateUserDTO } from '../dto/user.dto';
import * as userController from '../controllers/users';
import { controlledException } from '../../utils/catchErrors';

const authRouter = Router();

authRouter.post('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const payload: CreateUserDTO = req.body;
        const result = await userController.register(payload);

        return res.status(HttpCode.SAVED).send(result)
    } catch (error) {
        if (error instanceof UniqueConstraintError)
            next(new UniqueConstrainException("SignUp", "email"));
        else
            next(controlledException(error));
    }
});

export default  authRouter ;