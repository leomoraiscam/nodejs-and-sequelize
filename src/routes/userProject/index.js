import { Router } from 'express';

import UserProjectController from '../../app/controller/UserProjectController';
import AuthMiddleware from '../../app/middlewares/auth';

const routes = new Router();
const userProjectController = new UserProjectController();

routes.post('/users_project', AuthMiddleware, userProjectController.create);
routes.delete(
  '/users/:user_id/project/:project_id',
  AuthMiddleware,
  userProjectController.delete
);

export default routes;
