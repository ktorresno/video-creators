import { Video, VideoOuput } from '../../interfaces';

export const toVideo = (video: VideoOuput): Video => {
    return {
        id: video.id,
        title: video.title,
        url: video.url,
        description: video.description,
        published: video.published,
        userId: video.userId
    };
}
