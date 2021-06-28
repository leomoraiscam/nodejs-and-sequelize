import { Router } from 'express';
import ProjectController from '../../app/controller/ProjectController';

import ProjectTechController from '../../app/controller/ProjectTechController';
import AuthMiddleware from '../../app/middlewares/auth';

const routes = new Router();
const projectTechController = new ProjectTechController();

routes.post('/techs/project', AuthMiddleware, projectTechController.create);

export default routes;
