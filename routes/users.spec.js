import Router from 'koa-router';
import users from './users';

import chaiHttp from 'chai-http';
import Koa from 'koa';
import request from 'supertest';

const chai = require('chai');
const should = chai.should();
chai.use(chaiHttp);

describe('router USER', () => {
    let app;

    beforeEach(() => {
        app = new Koa();
        app.use(users.routes());
    });

    it('returns 200 if routes exists', (done) => {

        request(app.listen())
            .get('/users')
            .expect(200, done)
    });

    it('returns 404 if routes does not exist', (done) => {
        request(app.listen())
            .get('/random')
            .expect(404, done)
    });
});

describe('GET users', () => {
    let app;

    beforeEach(() => {
        app = new Koa();
        app.use(users.routes());
    });

    it('should get object of users', (done) => {
        request(app.listen())
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
    });

    it('the returned object should be an array of users', (done) => {
        request(app.listen())
            .get('/users')
            .end((err, res) => {
                res.body.rows.should.be.a('array');
                done();
            });
    });
//////////////////////// ????????????????????????? /////////////////////////////////////
//  find later how to have NON blocking test

    // it('returns 200 with existing id', (done) => {
    //     request(app.listen())
    //         .get('/users/2018-01-043T14:14:47.855Z')
    //         .end((err, res) => {
    //             res.should.have.status(200)
    //             done();
    //         });
    // });

    it('returns 404 with FALSE id', (done) => {
        request(app.listen())
            .get('/users/2018-01-02T14:14:47.855Z')
            .end((err, res) => {
                res.should.have.status(404)
                done();
            });
    });
});

// describe('POST todo', () => {
//     let app;

//     beforeEach(() => {
//         app = new Koa();
//         app.use(users.routes());
//     });

//     it('allows to post a todo', (done) => {
//         request(app.listen())
//             .post('/users')
//             .type('application/json')
//             .send({
//                 'title': 'TEST TODO HERE',
//                 'isCompleted': false
//             })
//             .end((err, res) => {
//                 res.status.should.equal(201)
//                 done()
//             })
//     })
// });


