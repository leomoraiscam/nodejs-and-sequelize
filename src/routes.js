const express = require('express');

const routes = express.Router();

const UserController = require('./controller/UserController');

routes.post('/users', UserController.store);

module.exports = routes;
