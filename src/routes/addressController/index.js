import { Router } from 'express';

import AddressController from '../../app/controller/AddressController';
import AddressValidation from '../../app/validation/addressController';

const routes = new Router();

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post(
  '/users/:user_id/addresses',
  AddressValidation.store,
  AddressController.store
);

export default routes;
