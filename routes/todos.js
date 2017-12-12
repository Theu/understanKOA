import Router from 'koa-router';

import setBodyRequest from '../middlewares/setBodyRequest';
import putRequestToDataBase from '../middlewares/putRequestToDataBase';

const router = new Router();

router.get('/', setBodyRequest);
router.post('/', putRequestToDataBase);

export default router;
