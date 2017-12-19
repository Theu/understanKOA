import  decriptBase from '../helpers/decriptBase';

import {
    chai,
    expect
} from 'chai';

import Koa from 'koa';
import request from 'supertest';
import authenticate from './authenticate';
import { authenticationApi } from '../helpers/authentication';
import { users } from '../common/users';

describe('authentication middleware', () => {
    let app;
    beforeEach(() => {
        app = new Koa();
    });

    it('shouts 401 without credentials', async () => {
        app.use(authenticate(authenticationApi(users)))
        await request(app.listen()) //app.listen abstract where to listne from :: i don't need localhost drum und dran
            .get('/todos')
            .expect(401);
    });



});
