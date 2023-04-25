import * as videoDal from '../dal/video';
import { GetAllVideosFilters } from '../dal/types';
import {VideoInput, VideoOuput} from '../../api/interfaces';

export const create = (payload: VideoInput): Promise<VideoOuput> => {
    return videoDal.create(payload);
}

export const update = (id: number, payload: Partial<VideoInput>): Promise<VideoOuput> => {
    return videoDal.update(id, payload);
}

export const publishedFlag = (id: number, payload: Partial<VideoInput>): Promise<VideoOuput> => {
    return videoDal.updatePublishedFlag(id, payload);
}

export const getById = (id: number): Promise<VideoOuput> => {
    return videoDal.getById(id);
}

export const deleteById = (id: number): Promise<boolean> => {
    return videoDal.deleteById(id);
}

export const getAll = (filters: GetAllVideosFilters): Promise<VideoOuput[]> => {
    return videoDal.getAll(filters);
}

export const validateByUrl = (url: string): Promise<boolean> => {
    return videoDal.validateByUrl(url);
}
