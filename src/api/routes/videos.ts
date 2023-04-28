import 'express-async-errors';
import { Router, Request, Response, NextFunction } from 'express';
import { UniqueConstraintError } from 'sequelize';

import  HttpException, { HttpCode } from '../../exceptions/HttpException';
import UniqueConstrainException from '../../exceptions/UniqueConstrainException';
import { CreateVideoDTO, FilterVideosDTO, UpdateVideoDTO } from '../dto/video.dto';
import * as videoController from '../controllers/video';
import { controlledException } from '../../utils/catchErrors';

const videosRouter = Router();

// get video by ID
videosRouter.get('/:id', async(req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const result = await videoController.getById(id);

    return res.status(HttpCode.OK).send(result);
  } catch (error) {
    next(controlledException(error));
  }
});

// update video
videosRouter.put('/:id', async(req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const payload: UpdateVideoDTO = req.body;
    const result = await videoController.update(id, payload);

    return res.status(HttpCode.SAVED).send(result);
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      next(new UniqueConstrainException("Video", "url"));
    } else {
      next(controlledException(error));
    }
  }
});

videosRouter.patch('/:id', async(req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const payload: UpdateVideoDTO = req.body;
    // Validate that published flag is present in the request.
    if (payload.published === undefined)
      throw new HttpException(HttpCode.BAD_REQUEST, 'Missing [published] flag in the request.');

    const result = await videoController.updatePublishedFlag(id, payload);

    return res.status(HttpCode.SAVED).send(result);
  } catch (error) {
    if (error instanceof UniqueConstraintError)
      next(new UniqueConstrainException("Video", "url"));
    else
      next(controlledException(error));
  }
});

// Register new video url
videosRouter.post('/', async(req: Request, res: Response, next: NextFunction) => {
  try {
    const payload: CreateVideoDTO = req.body;
    const result = await videoController.create(payload);

    return res.status(HttpCode.SAVED).send(result)
  } catch (error) {
    if (error instanceof UniqueConstraintError)
      next(new UniqueConstrainException("Video", "url"));
    else
      next(controlledException(error));
  }
});

// Get all videos
videosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filters: FilterVideosDTO = req.query;
    const results = await videoController.getAll(filters);

    return res.status(HttpCode.OK).send(results);
  } catch (error) {
    next(controlledException(error));
  }
});

// Delete a video by id
videosRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const result = await videoController.deleteById(id);

    return res.status(HttpCode.OK).send({
        success: result
    });
  } catch (error) {
    next(controlledException(error));
  }
});

export default videosRouter;