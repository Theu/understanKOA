export function showTodos(getTodos) {
    return async function showTodosHandler(ctx) {
        ctx.body = await getTodos();
        ctx.status = 200;
    };
}

export function visualizeTodos(getTodos) {
    return async function showTodoHandlers(ctx) {
        const jsonRes = await getTodos();
        const todoList = Object.entries(jsonRes.rows).map(([key, value]) => {return value.doc.title})
        const todo = todoList.map(todo => {return `<li>${todo}</li>`})
        // TODO: UNDERSTAND HOW TO DEAL WITH NODES IN NODE
        const htmlRes = `<html>
            <head>
                <title>
                    SHOW TODOS
                </title>
            </head>
            <body>
                <h1>todo list</h1>
                <ul>${todo}</ul>
            </body>
        </html>`
        ctx.body = htmlRes;
        ctx.status =200;
    }
}

export function showTodo(readTodo) {
    return async function showTodoHandlers(ctx) {
        ctx.body = await readTodo(ctx.params.id);
        ctx.status = 200;
    };
};

export function storeTodoToDataBase(createTodo) {
    return async function storeTodoToDataBaseHandler(ctx) {
        await createTodo(ctx.request.body);
        ctx.status = 201;
    };
};

export function updateTodoInDataBase(updateTodo) {
    return async function updateTodoInDataBaseHandler(ctx) {
        await updateTodo(ctx.request.body.title, ctx.params.id)
        ctx.status = 200;
    };
};

export function removeTodoFromDataBase(deleteTodo) {
    return async function removeTodoFromDataBaseHanlder(ctx) {
        await deleteTodo(ctx.params.id);
        ctx.status = 204;
    };
};
