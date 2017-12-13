import db from '../helpers/db';

export default async function removeTodoFromDataBase(ctx) {
    db.remove(await db.get(ctx.params.id));
    ctx.status = 204;
};
