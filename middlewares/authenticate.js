import  decrypt from '../helpers/decryptBase';
// with a real DB I should run a call in order to fetch all username and password to test against (eg: allDocs() and fetch them) here I use an object just for testing

export default function authenticate(authenticateLogin){
    return async function authenticateMiddleware(ctx, next) {
        const credentials = decrypt(ctx.request.header.authorization) || decrypt(ctx.cookies.get('auth'));
        if (!authenticateLogin(credentials)) {
            ctx.body = 'I find your attempt disturbing';
            ctx.status = 401;
            return;
        }

        await next();
        return;
    }
}
