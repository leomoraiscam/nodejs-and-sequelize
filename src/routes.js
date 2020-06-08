const express = require('express');

const routes = express.Router();

routes.get('/user', (req, res) => {
  return res.json({
    name: 'Leonardo Morais',
    projeto: 'Node.Js com Sequelize',
  });
});

module.exports = routes;
