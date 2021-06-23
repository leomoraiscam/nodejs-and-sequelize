import { Router } from 'express';

import AddressController from '../../app/controller/AddressController';
import addressValidation from '../../app/validation/addressController';

const routes = new Router();
const addressController = new AddressController();

routes.post(
  '/users/:user_id/addresses',
  addressValidation.create,
  addressController.create
);

export default routes;
