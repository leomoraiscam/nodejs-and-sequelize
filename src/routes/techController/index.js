import { Router } from 'express';

import TechController from '../../app/controller/TechController';
import techValidation from '../../app/validation/techController';

const routes = new Router();
const techController = new TechController();

routes.post(
  '/users/:user_id/techs',
  techValidation.create,
  techController.create
);
routes.put('/techs/:tech_id', techController.update);

export default routes;
