import { createApi } from './users';
import {
    chai,
    expect
} from 'chai';

const cleanDB = () => {
    'logic to create a db at every call'
}

const {
    getUsers,
    createUser,
    readUser,
    updateUser,
    deleteUser
} = createApi(cleanDB);
const UserMock = [
    {'ttile': 'one', 'blb':'oo'},
    {'ttile': 'two', 'blb':'ii'}
];
describe('createApi', () => {
    it('should be a function', () => {
        expect(createApi).to.be.a('function');
    });
});

describe('getUsers', () => {
    it('should be a function', () => {
        expect(getUsers).to.be.a('function');
    });
});

describe('createUser', () => {
    it('should be a function', () => {
        expect(createUser).to.be.a('function');
    });
});

describe('readUser', () => {
    it('should be a function', () => {
        expect(readUser).to.be.a('function');
    });
});

describe('updateUser', () => {
    it('should be a function', () => {
        expect(updateUser).to.be.a('function');
    });
});

describe('deleteUser', () => {
    it('should be a function', () => {
        expect(deleteUser).to.be.a('function');
    });
});


