import Router from 'koa-router';
import todos from './todos';
import { users } from '../common/users';

import chaiHttp from 'chai-http';
import Koa from 'koa';
import request from 'supertest';

const chai = require('chai');
const should = chai.should();
chai.use(chaiHttp);

describe('router', () => {
    let app;

    beforeEach(() => {
        app = new Koa();
        app.use(todos.routes());
    });

    it('returns 200 if routes exists', (done) => {

        request(app.listen())
            .get('/todos')
            .expect(200, done)
    });

    it('returns 404 if routes exists', (done) => {
        request(app.listen())
            .get('/random')
            .expect(404, done)
    });
});

describe('GET todos', () => {
    let app;

    beforeEach(() => {
        app = new Koa();
        app.use(todos.routes());
    });

    it('should get object of todos', (done) => {
        request(app.listen())
            .get('/todos')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
    });

    it('the returned object should be an array of todos', (done) => {
        request(app.listen())
            .get('/todos')
            .end((err, res) => {
                res.body.rows.should.be.a('array');
                done();
            });
    });

    it('returns a given todo with a given id', (done) => {
        request(app.listen())
            .get('/todos/2018-01-02T15:13:58.630Z')
            .end((err, res) => {
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('POST todo', () => {
    let app;

    beforeEach(() => {
        app = new Koa();
        app.use(todos.routes());
    });

    it('allows to post a todo', (done) => {
        request(app.listen())
            .post('/todos')
            .type('application/json')
            .send({
                'title': 'TEST TODO HERE',
                'isCompleted': false
            })
            .end((err, res) => {
                res.status.should.equal(201)
                done()
            })
    })
});


