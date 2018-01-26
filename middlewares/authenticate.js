import  decrypt from '../helpers/decryptBase';
// with a real DB I should run a call in order to fetch all username and password to test against (eg: allDocs() and fetch them) here I use an object just for testing

export default function authenticate(authenticateLogin){
    return async function authenticateMiddleware(ctx, next) {
        if(ctx.request.url.indexOf('login') !== -1) {
            return next();
        }

        const credentials = decrypt(ctx.request.header.authorization) || decrypt(ctx.cookies.get('auth'));
        if (!authenticateLogin(credentials)) {
            ctx.body = 'please insert a valid entry for /todos/login/:username/:password';
            ctx.status = 401;
            return;
        }
        ctx.cookies.set('auth', ctx.request.header.authorization, {maxAge: 60000})
        return next();
    }
}
