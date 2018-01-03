import Router from 'koa-router';
import {getDB} from '../helpers/db';
import { createApi } from '../api/todos';


const {
    getTodos,
    createTodo,
    readTodo,
    updateTodo,
    deleteTodo
} = createApi(getDB);

import {
    showTodos,
    storeTodoToDataBase,
    showTodo,
    updateTodoInDataBase,
    removeTodoFromDataBase
} from '../handlers/todos';

const router = new Router({prefix: '/todos'});

router.get('/', showTodos(getTodos));
router.post('/', storeTodoToDataBase(createTodo));
router.get('/:id', showTodo(readTodo));
router.put('/:id', updateTodoInDataBase(updateTodo));
router.del('/:id', removeTodoFromDataBase(deleteTodo));

export default router;
