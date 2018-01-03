import Router from 'koa-router';
import {getUserDB} from '../helpers/userDB';
import { createApi } from '../api/Users';


const {
    getUsers,
    createUser,
    readUser,
    updateUser,
    deleteUser
} = createApi(getUserDB);

import {
    showUsers,
    storeUserToDataBase,
    showUser,
    updateUserInDataBase,
    removeUserFromDataBase
} from '../handlers/Users';

const userRouter = new Router({prefix: '/users'});

userRouter.get('/', showUsers(getUsers));
userRouter.post('/', storeUserToDataBase(createUser));
userRouter.get('/:id', showUser(readUser));
userRouter.put('/:id', updateUserInDataBase(updateUser));
userRouter.del('/:id', removeUserFromDataBase(deleteUser));

export default userRouter;
