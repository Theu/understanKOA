export default function setSecureCookie() {
    return async function storeAshInCookie(ctx, next) {
        (ctx.header.authorization !== undefined) ? ctx.cookies.set('auth', ctx.header.authorization, {maxAge: 60000}) : console.log('richiesta');
        return await next();
    }
}
