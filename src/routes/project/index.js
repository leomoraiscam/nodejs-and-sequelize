import { Router } from 'express';

import ProjectController from '../../app/controller/ProjectController';
import AuthMiddleware from '../../app/middlewares/auth';

const routes = new Router();
const projectController = new ProjectController();

routes.post('/users/projects', AuthMiddleware, projectController.create);
routes.put('/projects/:project_id', AuthMiddleware, projectController.update);

export default routes;
