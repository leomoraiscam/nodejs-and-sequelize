const express = require('express');

const routes = express.Router();

const UserController = require('./controller/UserController');
const AddressController = require('./controller/AddressController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/users/:user_id/addresses', AddressController.store);

module.exports = routes;
