import { Router } from 'express';

import ReportController from '../../app/controller/ReportController';

const routes = new Router();

routes.get('/report', ReportController.show);

export default routes;
