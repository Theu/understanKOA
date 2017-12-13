import db from '../helpers/db';

export default async function listTodos() {
    const allCocsFromDb = await db.allDocs({ include_docs: true });

    return allCocsFromDb.rows;
};

