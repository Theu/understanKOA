import listTodos from './listTodos';

export default async function showTodos(ctx) {
    ctx.status = 200;
    ctx.body = await listTodos();
};
