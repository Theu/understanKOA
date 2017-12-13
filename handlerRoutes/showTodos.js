import listTodos from './listTodos';

export default async function showTodos(ctx) {
    ctx.body = await listTodos();
};
