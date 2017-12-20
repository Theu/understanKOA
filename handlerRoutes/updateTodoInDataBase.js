import useDb from '../helpers/db';

export default async function updateTodoInDataBase(ctx) {
    const title = ctx.request.body.title;
    const docToUpdate = await useDb.get(ctx.params.id);
    await useDb.put({
        _id: ctx.params.id,
        _rev: docToUpdate._rev,
        title: title
        });
    ctx.status = 200;
};
