// Data access layer (DAL)
import { Video } from '../models'
import { GetAllVideosFilters } from './types';
import { VideoInput, VideoOuput } from '../models/Video';
import NotFoundException from '../../exceptions/NotFoundException';

export const create = async (payload: VideoInput): Promise<VideoOuput> => {
    const video = await Video.create(payload);
    return video;
}

export const findOrCreate = async (payload: VideoInput): Promise<VideoOuput> => {
    const [video] = await Video.findOrCreate({
        where: {
            title: payload.title
        },
        defaults: payload
    });
    return video;
}

export const update = async (id: number, payload: Partial<VideoInput>): Promise<VideoOuput> => {
    const video = await Video.findByPk(id);
    if (!video) {
        throw new NotFoundException("Video", id.toString());
    }
    const updatedVideo = await video.update(payload);
    return updatedVideo;
}

export const updatePublishedFlag = async (id: number, payload: Partial<VideoInput>): Promise<VideoOuput> => {
    const video = await Video.findByPk(id);
    if (!video) {
        throw new NotFoundException("Video", id.toString());
    }
    const updatedVideo = await video.update(
        { published: payload.published },
        { where: {id} });

    return updatedVideo;
}

export const getById = async (id: number): Promise<VideoOuput> => {
    const video = await Video.findByPk(id);
    if (!video) {
        throw new NotFoundException("Video", id.toString());
    }
    return video;
}

export const deleteById = async (id: number): Promise<boolean> => {
    const video = await Video.findByPk(id);
    if (!video) {
        throw new NotFoundException("Video", id.toString());
    }
    const deletedVideoCount = await Video.destroy({
        where: {id}
    });
    return !!deletedVideoCount;
}

export const getAll = async (filters?: GetAllVideosFilters): Promise<VideoOuput[]> => {
    return Video.findAll({
        where: {
            published: true
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    });
}

export const validateByUrl = async (urlParam?: string): Promise<boolean> => {
    const video = Video.findOne({ where: { url: urlParam } });
    return !!video;
}