import { Router } from 'express';

import ReportControoler from '../../app/controller/ReportController';

const routes = new Router();

routes.get('/report', ReportControoler.show);

export default routes;
