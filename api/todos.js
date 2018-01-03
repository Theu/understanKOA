export function createApi(getDB) {
    // create here a const for getDB
    return {
        getTodos: async () => {
            return await getDB().allDocs({ include_docs: true });
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
