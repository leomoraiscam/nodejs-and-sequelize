import { Router } from 'express';

import ProjectController from '../../app/controller/ProjectController';

const routes = new Router();
const projectController = new ProjectController();

routes.post('/users/:user_id/projects', projectController.create);

export default routes;
