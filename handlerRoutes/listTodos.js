import useDb from '../helpers/db';


export default async function listTodos() {
    return await useDb.allDocs({ include_docs: true });
};

