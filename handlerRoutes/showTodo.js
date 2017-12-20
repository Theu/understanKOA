import useDb from '../helpers/db';

export default async function showTodo(ctx) {
    ctx.body = await useDb.get(ctx.params.id);
    ctx.status = 200;
};
