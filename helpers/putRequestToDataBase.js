import PouchDB from 'pouchdb';
const db = new PouchDB('newDB');

const putRequestToDataBase = async ctx => {
    const {title} = ctx.request.body
    const todo = {
        title,
        _id: new Date().toISOString(),
        isCompleted: false
    }
    ctx.status = 201
    // PUT todo in DB

    db
        .put(todo)
        .then(response => console.log('response', response))
        .catch(error => console.log('error on put', error))

};

export default putRequestToDataBase;
