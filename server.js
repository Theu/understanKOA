import Koa from 'koa';
import Router from 'koa-router'
import todos from './routes/todos';

export const app = new Koa() //to where i export?

const router = new Router();

router.use('/todos', todos.routes(), todos.allowedMethods())
app.use(todos.routes())
app.listen(3000)

