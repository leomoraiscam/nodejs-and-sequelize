const express = require('express');

const routes = express.Router();

const UserController = require('./controller/UserController');
const AddressController = require('./controller/AddressController');
const TechController = require('./controller/TechController');
const ReportControoler = require('./controller/ReportController');

const AddressValidation = require('./validation/addressController');
const TechValidation = require('./validation/techController');
const UserValidation = require('./validation/userController');

routes.get('/users', UserController.index);
routes.post('/users', UserValidation.store, UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post(
  '/users/:user_id/addresses',
  AddressValidation.store,
  AddressController.store
);

routes.get('/users/:user_id/techs', TechController.index);
routes.post(
  '/users/:user_id/techs',
  TechValidation.store,
  TechController.store
);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportControoler.show);
module.exports = routes;
