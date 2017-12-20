import  decriptBase from '../helpers/decryptBase';

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
        app.use(authenticate(authenticationApi(users)));
    });

    it('gives 401 without credentials', (done) => {
        request(app.listen()) //app.listen abstract where to listne from :: i don't need localhost drum und dran
            .get('/')
            .expect(401, done);
    });

    it('gives 401 with incorrect username and correct password', (done) => {
        request(app.listen())
            .get('/')
            .auth('wolverineeeee', 'optimusprime')
            .expect(401, done)
    });

    it('gives 401 with correct username and incorrect password', (done) => {
        request(app.listen())
            .get('/')
            .auth('wolverine', 'optimusprimeeeeeee')
            .expect(401, done)
    });

    it('gives 401 with incorrect username and incorrect password', (done) => {
        request(app.listen())
            .get('/')
            .auth('wolverineeeeee', 'optimusprimeeeeeee')
            .expect(401, done)
    });

    it('gives 404 with correct username and password', (done) => {
        request(app.listen())
            .get('/notexisting')
            .auth('wolverine', 'optimusprime')
            .expect(404, done)
    });
});
