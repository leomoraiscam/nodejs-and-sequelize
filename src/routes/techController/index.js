import { Router } from 'express';

import TechController from '../../app/controller/TechController';
import TechValidation from '../../app/validation/techController';

const routes = new Router();

routes.get('/users/:user_id/techs', TechController.index);
routes.post(
  '/users/:user_id/techs',
  TechValidation.store,
  TechController.store
);
routes.delete('/users/:user_id/techs', TechController.delete);
export default routes;
