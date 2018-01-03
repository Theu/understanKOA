export function showUsers(getUsers) {
    return async function showUsersHandler(ctx) {
        ctx.body = await getUsers();
        ctx.status = 200;
    };
}

export function showUser(readUser) {
    return async function showUserHandlers(ctx) {
        ctx.body = await readUser(ctx.params.id);
        ctx.status = 200;
    };
};

export function storeUserToDataBase(createUser) {
    return async function storeUserToDataBaseHandler(ctx) {
        await createUser(ctx.request.body);
        ctx.status = 201;
    };
};

export function updateUserInDataBase(updateUser) {
    return async function updateUserInDataBaseHandler(ctx) {
        await updateUser(ctx.request.body.name, ctx.params.id)
        ctx.status = 200;
    };
};

export function removeUserFromDataBase(deleteUser) {
    return async function removeUserFromDataBaseHanlder(ctx) {
        await deleteUser(ctx.params.id);
        ctx.status = 204;
    };
};
