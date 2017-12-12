import db from './db';

const showTodos = async () => {
    const result = await db.allDocs({
                            include_docs: true
                        });
    const allDocsFetchedFromDb = result.rows;

    var objectEntries = Object.entries(allDocsFetchedFromDb).map(([key,value]) => value.doc.title)
    return objectEntries;
};

export default showTodos;

