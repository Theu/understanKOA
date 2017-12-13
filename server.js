import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import authenticate from './middlewares/authenticate'
import Router from 'koa-router';
import todos from './routes/todos';

const app = new Koa();
const router = new Router();

app.use(authenticate);
app.use(bodyparser());
app.use(todos.routes());
app.listen(3000);

