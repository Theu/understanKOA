import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import Router from 'koa-router'
import todos from './routes/todos';

export const app = new Koa() //to where i export?
app.use(bodyparser())

const router = new Router();
router.use('/todos', todos.routes(), todos.allowedMethods())
app.use(todos.routes())
app.listen(3000)

