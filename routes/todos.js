import Router from 'koa-router';

import showTodos from '../handlerRoutes/showTodos';
import showTodo from '../handlerRoutes/showTodo';
import storeTodoToDataBase from '../handlerRoutes/storeTodoToDataBase';
import removeTodoFromDataBase from '../handlerRoutes/removeTodoFromDataBase';
import updateTodoInDataBase from '../handlerRoutes/updateTodoInDataBase';


const router = new Router({prefix: '/todos'});


router.get('/', showTodos);
router.post('/', storeTodoToDataBase);
router.get('/:id', showTodo);
router.put('/:id', updateTodoInDataBase);
router.del('/:id', removeTodoFromDataBase);

export default router;
