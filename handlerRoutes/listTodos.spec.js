import listTodos from './listTodos';
import {
    chai,
    expect
} from 'chai';

import Koa from 'koa';
import request from 'supertest';

describe('listTodos', () => {
    let app;
    beforeEach(() => {
        app = new Koa();
    })

    it('should be a function', () => {
        expect(listTodos).to.be.a('function');
    });


});
