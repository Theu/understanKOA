import db from '../helpers/db';

export default async function storeTodoToDataBase(ctx) {
    const todo = {
         ... ctx.request.body,
        _id: new Date().toISOString(),
        isCompleted: false
    }
    await db.put(todo);
    ctx.status = 201;
};
