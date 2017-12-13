import Router from 'koa-router';

import showTodos from '../handlerRoutes/showTodos';
import showTodo from '../handlerRoutes/showTodo';
import storeTodoToDataBase from '../handlerRoutes/storeTodoToDataBase';
import removeTodoFromDataBase from '../handlerRoutes/removeTodoFromDataBase';
import updateTodoInDataBase from '../handlerRoutes/updateTodoInDataBase';

const router = new Router({prefix: '/todos'});

router.get('/', showTodos);
router.get('/:id', showTodo);
router.post('/', storeTodoToDataBase);
router.put('/:id', updateTodoInDataBase);
router.del('/:id', removeTodoFromDataBase);

export default router;
