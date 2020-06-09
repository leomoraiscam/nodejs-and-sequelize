const express = require('express');

const routes = express.Router();

const UserController = require('./controller/UserController');
const AddressController = require('./controller/AddressController');
const TechController = require('./controller/TechController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

module.exports = routes;
