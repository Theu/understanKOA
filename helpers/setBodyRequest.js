// TO get the body of the request
// import db from './db';

// const showTodos = function() {
//     return db
//                 .allDocs({
//                     include_docs: true
//                 })
//                 .then(result => {
//                     const allDocs = result.rows;
//                     var objectEntries = Object.entries(allDocs).map(([key,value]) => {
//                         return value.doc.title
//                     })
//                     return objectEntries.join();
//                 })
//                 .catch(error => console.log('error of showToDo', error))
// }
import showTodos from './showTodos';

const setBodyRequest = ctx => {
    return showTodos().then(result => {
        ctx.body = result;
    });
};

export default setBodyRequest;
