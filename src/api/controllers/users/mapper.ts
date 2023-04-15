import { User } from '../../interfaces';
import { UserOuput } from '../../../db/models/User';

export const toUser = (user: UserOuput): User => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        photoUrl: user.photoUrl,
        cookie: user.cookie,
        creatorType: user.creatorType,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    };
}
