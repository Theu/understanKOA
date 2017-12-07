import test from 'ava';
import request from 'supertest-as-promised'

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
