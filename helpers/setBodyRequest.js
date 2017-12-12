import showTodos from './showTodos';

const setBodyRequest = async ctx => {
    ctx.body = await showTodos();
};

export default setBodyRequest;
