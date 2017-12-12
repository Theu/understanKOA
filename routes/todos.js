import Router from 'koa-router';
import PouchDB from 'pouchdb';

const router = new Router();

const db = new PouchDB('newDB');
const remoteCouch = false; // check if needed

const todos = [];

// TO check if DB is created. It should be deleted after refactor.
db.info().then(result => console.log('VERIFY', result))


// TO get the body of the request
router.get('/', async (ctx) => {
    ctx.body = todos;
});

// TO post
router.post('/', async ctx => {
    const {title} = ctx.request.body
    let todo = {
        title,
        _id: new Date().toISOString(),
        isCompleted: false
    }

    // PUT todo in DB
    db
        .put(todo)
        .then(response => console.log('response', response))
        .catch(error => console.log('error on put', error))

    ctx.status = 201
})

const showTodo = () => {
    db
        // fetch todos from DB
        .allDocs({
            include_docs: true
        })
        .then(result => {
            console.log('RESULT', JSON.stringify(result, null, '\t'));
            const allDocs = result.rows;
            console.log('ROWS', allDocs);

            var objectEntries = Object.entries(allDocs).map(([key,value]) => {
                return value.doc.title
             })
            todos.push(objectEntries)
        })
        .catch(error => console.log('error of showToDo', error))
}


showTodo()

export default router;
