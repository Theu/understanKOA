import db from '../helpers/db';

export default async function listTodos() {
    return await db.allDocs({ include_docs: true });
};

