import { Router } from 'express';

import SessionController from '../../app/controller/SessionController';

const routes = new Router();
const sessionController = new SessionController();

routes.post('/session', sessionController.create);

export default routes;
