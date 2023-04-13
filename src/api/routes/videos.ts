import { Router, Request, Response, NextFunction } from 'express';

import * as videoController from '../controllers/video';
import { CreateVideoDTO, FilterVideosDTO, UpdateVideoDTO } from '../dto/video.dto';

const videosRouter = Router();

// get video by ID
videosRouter.get('/:id', async(req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const result = await videoController.getById(id);
    return res.status(200).send(result);
  } catch(error) {
    next(error);
  }    
});

// update video
videosRouter.put('/:id', async(req: Request, res: Response) => {
  const id = Number(req.params.id);
  const payload:UpdateVideoDTO = req.body;
  
  const result = await videoController.update(id, payload);

  // TODO handle duplicate Error
  return res.status(201).send(result);
});

// delete video
videosRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)
    
    const result = await videoController.deleteById(id)
    return res.status(204).send({
        success: result
    })
});

// create video
videosRouter.post('/', async (req: Request, res: Response) => {
  const payload:CreateVideoDTO = req.body

  const result = await videoController.create(payload)
  // TODO handle duplicate Error
  return res.status(200).send(result)
});

// Get all videos
videosRouter.get('/', async (req: Request, res: Response) => {
  const filters:FilterVideosDTO = req.query

  const results = await videoController.getAll(filters)
  return res.status(200).send(results)
})

export default videosRouter;