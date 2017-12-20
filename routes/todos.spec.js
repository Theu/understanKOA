import Router from 'koa-router';
import todos from './todos';
import authenticate from '../middlewares/authenticate';
import { authenticationApi } from '../helpers/authentication';
import { users } from '../common/users';
// import showTodos from '../handlerRoutes/showTodos';
// import showTodo from '../handlerRoutes/showTodo';
// import storeTodoToDataBase from '../handlerRoutes/storeTodoToDataBase';
// import removeTodoFromDataBase from '../handlerRoutes/removeTodoFromDataBase';
// import updateTodoInDataBase from '../handlerRoutes/updateTodoInDataBase';

import {
    chai,
    expect
} from 'chai';

import Koa from 'koa';
import request from 'supertest';





// const router = new Router({prefix: '/todos'});

describe('router', () => {
    let app;

    beforeEach(() => {
        app = new Koa();
        app.use(todos.routes());
    })

    it('returns 200 if routes exists', (done) => {

        request(app.listen())
            .get('/todos')
            .auth('wolverine', 'optimusprime')
            .expect(200, done)
    })

    it('returns 404 if routes exists', (done) => {
        request(app.listen())
            .get('/random')
            .auth('wolverine', 'optimusprime')
            .expect(404, done)
    })
});
