import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import todos from './routes/todos';
import users from './routes/users';
import { users as usersForMidleware } from './common/users';
import authenticate from './middlewares/authenticate';
import { authenticationApi } from './helpers/authentication';
import setSecureCookies from './middlewares/setSecureCookies';


const app = new Koa();
app.use(bodyparser());

app.use(users.routes());
app.use(setSecureCookies());
app.use(authenticate(
    authenticationApi(usersForMidleware)
));

app.use(todos.routes());
app.listen(3000);



// YOU ARE GOING SERVER it is not needed client
// const serve = require('koa-static');
// const views = require('koa-views')
// app.use(serve(__dirname, '/index.html'))




















// const send = require('koa-send');
// const serve = require('koa-static');
// app.use(serve(__dirname, '/index.html'))
// app.use(async (ctx) => {
//     if ('/todos' == ctx.path) return ctx.body = router.get('/', showTodos(getTodos))
//     await send(ctx, ctx.path);
//   })
