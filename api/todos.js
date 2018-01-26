export function createApi(getDB) {
    // create here a const for getDB
    return {
        getTodos: async () => {
            const todosWithAllFields = await getDB().allDocs({ include_docs: true });
            const todos = Object.entries(todosWithAllFields.rows).map(([key, value]) => {
                return {title: value.doc.title, id: value.doc._id}
            })
            return todos;
        },
        createTodo: async (request) => {
            const todo = {
                ... request,
                _id: new Date().toISOString(),
                isCompleted: false
            };
            return await getDB().put(todo);
        },
        readTodo: async (id) => {
            return await getDB().get(id);
        },
        updateTodo: async (requestedTitle, requestedId) => {
            const title = requestedTitle;
            const docToUpdate = await getDB().get(requestedId);
            return await getDB().put({
                _id: requestedId,
                _rev: docToUpdate._rev,
                title: title
            });
        },
        deleteTodo: async (id) => {
            return await getDB().remove(await getDB().get(id));
        }
    };
}
