import Router from 'koa-router';

import setBodyRequest from '../helpers/setBodyRequest';
import putRequestToDataBase from '../helpers/putRequestToDataBase';

const router = new Router();

router.get('/', setBodyRequest);
router.post('/', putRequestToDataBase);

export default router;
