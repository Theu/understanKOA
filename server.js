import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import authenticate from './middlewares/authenticate'
import todos from './routes/todos';
import {users} from './common/users';
import { authenticationApi } from './helpers/authentication';

const app = new Koa();


app.use(authenticate(
    authenticationApi(users)
));
app.use(bodyparser());
app.use(todos.routes());
app.listen(3000);

