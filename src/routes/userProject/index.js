import { Router } from 'express';

import UserProjectController from '../../app/controller/UserProjectController';

const routes = new Router();
const userProjectController = new UserProjectController();

routes.post('/users_project', userProjectController.create);
routes.delete(
  '/users/:user_id/project/:project_id',
  userProjectController.delete
);

export default routes;
