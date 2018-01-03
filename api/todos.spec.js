import { createApi } from './todos';
import {getDB} from '../helpers/db';
import {
    chai,
    expect
} from 'chai';

const cleanDB = () => {
    'logic to create a db at every call'
}

const {
    getTodos,
    createTodo,
    readTodo,
    updateTodo,
    deleteTodo
} = createApi(cleanDB);
const todoMock = [
    {'ttile': 'one', 'blb':'oo'},
    {'ttile': 'two', 'blb':'ii'}
];
describe('createApi', () => {
    it('should be a function', () => {
        expect(createApi).to.be.a('function');
    });
});

describe('getTodos', () => {
    it('should be a function', () => {
        expect(getTodos).to.be.a('function');
    });
});

describe('createTodo', () => {
    it('should be a function', () => {
        expect(createTodo).to.be.a('function');
    });
});

describe('readTodo', () => {
    it('should be a function', () => {
        expect(readTodo).to.be.a('function');
    });
});

describe('updateTodo', () => {
    it('should be a function', () => {
        expect(updateTodo).to.be.a('function');
    });
});

describe('deleteTodo', () => {
    it('should be a function', () => {
        expect(deleteTodo).to.be.a('function');
    });
});


