import Router from 'koa-router';
import {getDB} from '../helpers/db';
import { createApi } from '../api/todos';

import { users as usersForMidleware } from '../common/users';
import authenticate from '../middlewares/authenticate';
import {authenticationApi} from '../helpers/authentication';

const {
    getTodos,
    createTodo,
    readTodo,
    updateTodo,
    deleteTodo
} = createApi(getDB);

import {
    showTodos,
    visualizeTodos,
    storeTodoToDataBase,
    authorizeWithEndpoint,
    showTodo,
    updateTodoInDataBase,
    removeTodoFromDataBase
} from '../handlers/todos';

const router = new Router({prefix: '/todos'});

// order counts
router.get('/login/:username/:password', authorizeWithEndpoint())
router.get('/', visualizeTodos(getTodos));

router.get('/', showTodos(getTodos));
router.post('/', storeTodoToDataBase(createTodo));
router.get('/:id', showTodo(readTodo));
router.put('/:id', updateTodoInDataBase(updateTodo));
router.del('/:id', removeTodoFromDataBase(deleteTodo));

export default router;
