import {
    decriptBase
} from '../helpers/decriptBase';
// with a real DB I should run a call in order to fetch all username and password to test against (eg: allDocs() and fetch them) here I use an object just for testing

export default function authenticate(authenticateLogin){
    return async function authenticateMiddleware(ctx, next) {
        ctx.response.set('WWW-Authenticate', 'Basic realm="User Visible Realm"');

        const credentials = decriptBase(ctx.request.header.authorization);
        if (!authenticateLogin(credentials)) {
            ctx.body = 'I find your attempt disturbing';
            ctx.status = 401;
            return;
        }

        return await next();
    }
}
