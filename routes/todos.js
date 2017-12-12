import Router from 'koa-router';
// import db from '../helpers/db';

import todos from '../helpers/todos';

import setBodyRequest from '../helpers/setBodyRequest';
import putRequestToDataBase from '../helpers/putRequestToDataBase';

const router = new Router();
const remoteCouch = false; // check if needed

router.get('/', setBodyRequest);
router.post('/', putRequestToDataBase);

export default router;
