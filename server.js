import Koa from 'koa';
import bodyparser from 'koa-bodyparser';

import todos from './routes/todos';
import { users as usersForMidleware } from './common/users';
import authenticate from './middlewares/authenticate'
import { authenticationApi } from './helpers/authentication';
import users from './routes/users';

const app = new Koa();

app.use(bodyparser());
app.use(users.routes());
app.use(authenticate(
    authenticationApi(usersForMidleware)
));
app.use(todos.routes());
app.use(users.routes());
app.listen(3000);

