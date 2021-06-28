import { Router } from 'express';

import UserController from '../../app/controller/UserController';
import userValidation from '../../app/validation/userController';

import AuthMiddleware from '../../app/middlewares/auth';

const routes = new Router();
const userController = new UserController();

routes.get('/report', AuthMiddleware, userController.list);
routes.get('/users/me', AuthMiddleware, userController.show);
routes.post('/users', userValidation.create, userController.create);
routes.delete('/users', AuthMiddleware, userController.delete);

export default routes;
