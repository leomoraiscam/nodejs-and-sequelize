import { Router } from 'express';

import TechController from '../../app/controller/TechController';
import techValidation from '../../app/validation/techController';
import AuthMiddleware from '../../app/middlewares/auth';

const routes = new Router();
const techController = new TechController();

routes.post('/users/techs', AuthMiddleware, techController.create);
routes.put('/techs/:tech_id', AuthMiddleware, techController.update);

export default routes;
