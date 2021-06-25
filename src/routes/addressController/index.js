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
routes.put('/users/:user_id/addresses', addressController.update);
routes.delete(
  '/users/:user_id/addresses/:address_id',
  addressController.delete
);

export default routes;
