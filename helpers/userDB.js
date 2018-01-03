import PouchDB from 'pouchdb';

let instanceOfUserDb;

export const getUserDB = () => {
    if (!instanceOfUserDb) {
        instanceOfUserDb = new PouchDB('userDB');
    }
    return instanceOfUserDb;
};




