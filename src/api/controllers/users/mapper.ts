import { User, UserOuput } from '../../interfaces';

export const toUser = (user: UserOuput): User => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        photoUrl: user.photoUrl,
        cookie: user.cookie,
        creatorType: user.creatorType
    };
}
