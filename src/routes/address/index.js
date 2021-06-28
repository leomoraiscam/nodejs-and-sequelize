import { Router } from 'express';

import AddressController from '../../app/controller/AddressController';
import addressValidation from '../../app/validation/addressController';
import AuthMiddleware from '../../app/middlewares/auth';

const routes = new Router();
const addressController = new AddressController();

routes.post(
  '/addresses',
  AuthMiddleware,
  addressValidation.create,
  addressController.create
);
routes.put('/addresses', AuthMiddleware, addressController.update);
routes.delete('/addresses/:zip_code', AuthMiddleware, addressController.delete);

export default routes;
