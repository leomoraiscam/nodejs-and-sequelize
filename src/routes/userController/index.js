import { Router } from 'express';

import UserController from '../../app/controller/UserController';
import UserValidation from '../../app/validation/userController';

const routes = new Router();

routes.get('/users/:id', UserController.show);
routes.post('/users', UserValidation.store, UserController.create);
routes.delete('/users/:user_id', UserController.delete);

export default routes;
