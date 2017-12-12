import db from './db';

const showTodos = function() {
    return db
                .allDocs({
                    include_docs: true
                })
                .then(result => {
                    const allDocs = result.rows;
                    var objectEntries = Object.entries(allDocs).map(([key,value]) => {
                        return value.doc.title
                    })
                    return objectEntries.join();
                })
                .catch(error => console.log('error of showToDo', error))
};

export default showTodos;

