import { Router } from 'express';

import UserController from '../../app/controller/UserController';
import userValidation from '../../app/validation/userController';

const routes = new Router();
const userController = new UserController();

routes.get('/users/:id', userValidation.show, userController.show);
routes.post('/users', userValidation.create, userController.create);
routes.delete('/users/:id', userValidation.delete, userController.delete);

export default routes;
