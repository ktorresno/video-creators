import * as service from '../../../db/services/videoService';
import { CreateVideoDTO, UpdateVideoDTO, FilterVideosDTO } from '../../dto/video.dto';
import { Video } from '../../interfaces';
import * as mapper from './mapper';

export const create = async(payload: CreateVideoDTO): Promise<Video> => {
    return mapper.toVideo(await service.create(payload));
}

export const update = async(id: number, payload: UpdateVideoDTO): Promise<Video> => {
    return mapper.toVideo(await service.update(id, payload));
}

export const updatePublishedFlag = async(id: number, payload: UpdateVideoDTO): Promise<Video> => {
    return mapper.toVideo(await service.publishedFlag(id, payload));
}

export const getById = async (id: number): Promise<Video> => {
    return mapper.toVideo(await service.getById(id));
}

export const deleteById = async(id: number): Promise<boolean> => {
    const isDeleted = await service.deleteById(id);
    return isDeleted;
}

export const getAll = async(filters: FilterVideosDTO): Promise<Video[]> => {
    return (await service.getAll(filters)).map(mapper.toVideo);
}