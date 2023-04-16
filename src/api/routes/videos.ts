import 'express-async-errors';
import { Router, Request, Response, NextFunction } from 'express';
import { UniqueConstraintError } from 'sequelize';

import  HttpException, { HttpCode } from '../../exceptions/HttpException';
import NotFoundException from '../../exceptions/NotFoundException';
import UniqueConstrainException from '../../exceptions/UniqueConstrainException';
import { CreateVideoDTO, FilterVideosDTO, UpdateVideoDTO } from '../dto/video.dto';
import * as videoController from '../controllers/video';

const videosRouter = Router();

// get video by ID
videosRouter.get('/:id', async(req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const result = await videoController.getById(id);

    return res.status(HttpCode.OK).send(result);
  } catch(error) {
    if (error == "Error\: not found") {
      next(new NotFoundException("Video", id.toString()));
    } else {
      next(
        new HttpException(
            HttpCode.INTERNAL_SERVER_ERROR,
            "" + error
      ));
    }
  }
});

// update video
videosRouter.put('/:id', async(req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const payload:UpdateVideoDTO = req.body;
    const result = await videoController.update(id, payload);

    return res.status(HttpCode.SAVED).send(result);
  } catch(error) {

    if (error instanceof UniqueConstraintError) {
      next(
        new UniqueConstrainException("Video", "url")
      );
    } else if (error instanceof HttpException || error instanceof NotFoundException) {
      console.log("Error is n¡instance of httpException");
      next(error);
    } else {
      console.log("Error is not instance of");
      next(
        new HttpException(
            HttpCode.INTERNAL_SERVER_ERROR,
            "" + error
      ));
    }
  }
});

videosRouter.patch('/:id', async(req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const payload:UpdateVideoDTO = req.body;
    // Validate that published flag is present in the request.
    if (payload.published === undefined)
      next(new HttpException(HttpCode.BAD_REQUEST,'Missing [published] flag in the request.'));

    const result = await videoController.updatePublishedFlag(id, payload);

    return res.status(HttpCode.SAVED).send(result);
  } catch(error) {
    if (error instanceof UniqueConstraintError)
      next(new UniqueConstrainException("Video", "url"));
    else if (error instanceof HttpException) // Controlled Exceptions
      next(error);
    else
      next(
        new HttpException(
              HttpCode.INTERNAL_SERVER_ERROR,
              ""+error));
  }
});

// Register new video url
videosRouter.post('/', async(req: Request, res: Response, next: NextFunction) => {
  try {
    const payload:CreateVideoDTO = req.body;
    const result = await videoController.create(payload);

    return res.status(HttpCode.SAVED).send(result)
  } catch(error) {

    if (error instanceof UniqueConstraintError)
      next(new UniqueConstrainException("Video", "url"));
    else if (error instanceof HttpException) // Controlled Exceptions
      next(error);
    else
      next(
        new HttpException(
              HttpCode.INTERNAL_SERVER_ERROR,
              ""+error));
  }
});

// Get all videos
videosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filters:FilterVideosDTO = req.query;
    const results = await videoController.getAll(filters);

    return res.status(HttpCode.OK).send(results);
  } catch(error) {
    next(
      new HttpException(
            HttpCode.INTERNAL_SERVER_ERROR,
            ""+error
    ));
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
  } catch(error) {
    if (error == "Error\: not found") {
      next(new NotFoundException("Video", id.toString()));
    } else {
      next(
      new HttpException(
            HttpCode.INTERNAL_SERVER_ERROR,
            ""+error));
    }
  }
});

export default videosRouter;