import { Router } from 'express';

import UserController from '../../app/controller/UserController';
import UserValidation from '../../app/validation/userController';

const routes = new Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserValidation.store, UserController.store);

export default routes;
