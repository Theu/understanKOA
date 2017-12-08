import test from 'ava';
import request from 'supertest-as-promised'
import todo from '../routes/todos'

import {app} from '../server';

// here I create the test hook

test.beforeEach(async testIf => {
    testIf.context.request = request(app.callback())
});

// to test if my list is empty

test('to do list is empty', async testIf => {
    const {body, status, type} = await testIf.context.request.get('/todos')
    testIf.is(status, 200)
    testIf.is(type, 'application/json')
    testIf.is(body.length, 0)
});

// to test if a new entry is created

test('create new entry', async testIf => {
    const {status} = await testIf.context.request.post('/todos').send({
        title: 'Be awesome'
    });
    testIf.is(status, 201)
    testIf.is(await todo.count(), 1)
});
