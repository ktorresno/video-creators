import { Video } from '../../interfaces';
import { VideoOuput } from '../../../db/models/Video';

export const toVideo = (video: VideoOuput): Video => {
    return {
        id: video.id,
        title: video.title,
        url: video.url,
        description: video.description,
        published: video.published,
        createdAt: video.createdAt,
        updatedAt: video.updatedAt,
        deletedAt: video.deletedAt,
    };
}
