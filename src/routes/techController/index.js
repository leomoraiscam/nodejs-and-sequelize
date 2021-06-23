import { Router } from 'express';

import TechController from '../../app/controller/TechController';
import TechValidation from '../../app/validation/techController';

const routes = new Router();

routes.post(
  '/users/:user_id/techs',
  TechValidation.store,
  TechController.store
);

export default routes;
