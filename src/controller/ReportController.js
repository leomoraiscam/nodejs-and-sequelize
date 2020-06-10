const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@gmail.com.br',
        },
      },
    });

    return res.json(users);
  },
};
