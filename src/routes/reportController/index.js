import { Router } from 'express';

import ReportController from '../../app/controller/ReportController';

const routes = new Router();
const reportController = new ReportController();

routes.get('/report', reportController.show);

export default routes;
