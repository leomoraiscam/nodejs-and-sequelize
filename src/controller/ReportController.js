const { Op } = require('sequelize');
const User = require('../models/User');
const GlobalError = require('../errors/GlobalError');

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@gmail.com.br',
        },
      },
      include: [
        {
          association: 'addresses',
          where: {
            street: 'Rua Guilherme Gembala',
          },
        },
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'React%',
            },
          },
        },
      ],
    });

    if (!users) {
      throw new GlobalError('Usuário não encontrado', 204);
    }

    return res.json(users);
  },
};
