import PouchDB from 'pouchdb';
// const db = new PouchDB('newDB');

let instanceOfDb;

export const getDB = () => {
    if (!instanceOfDb) {
        instanceOfDb = new PouchDB('newDB');
    }
    return instanceOfDb;
};

let cleanDB;




