import PouchDB from 'pouchdb';
// const db = new PouchDB('newDB');

let instanceOfDb;

export const getDB = () => {
    console.log('PRIMA', instanceOfDb);
    if (!instanceOfDb) {
        instanceOfDb = new PouchDB('newDB');
    }
    console.log('DOPO', instanceOfDb);
    return instanceOfDb;
};


