import db from '../helpers/db';

export default async function showTodo(ctx) {
    ctx.body = await db.get(ctx.params.id);
    ctx.status = 200;
};
