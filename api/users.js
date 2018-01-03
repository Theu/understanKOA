export function createApi(getUserDB) {
    // create here a const for getUserDB
    return {
        getUsers: async () => {
            return await getUserDB().allDocs({ include_docs: true });
        },
        createUser: async (request) => {

            const User = {
                ... request,
                _id: new Date().toISOString(),
                isCompleted: false // if in the todo it can be incompleted ATM the creation is completed
            };
            return await getUserDB().put(User);
        },
        readUser: async (id) => {
            return await getUserDB().get(id);
        },
        updateUser: async (requestedName, requestedId) => {
            const name = requestedName;
            const docToUpdate = await getUserDB().get(requestedId);
            return await getUserDB().put({
                _id: requestedId,
                _rev: docToUpdate._rev,
                name: name,
                surname: docToUpdate.surname,
                userName: docToUpdate.userName,
                psw: docToUpdate.psw
            });
        },
        deleteUser: async (id) => {
            return await getUserDB().remove(await getUserDB().get(id));
        }
    };
}
