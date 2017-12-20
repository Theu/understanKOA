import useDb from '../helpers/db';

export default async function removeTodoFromDataBase(ctx) {
    useDb.remove(await useDb.get(ctx.params.id));
    ctx.status = 204;
};
