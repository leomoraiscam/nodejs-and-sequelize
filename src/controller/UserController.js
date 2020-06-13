const User = require('../models/User');
const GlobalError = require('../errors/GlobalError');

module.exports = {
  async index(req, res) {
    const user = await User.findAll();

    if (!user.length) {
      throw new GlobalError('Usuários não encontrados', 204);
    }

    return res.json(user);
  },
  async show(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      throw new GlobalError('Usuario não encontrado', 204);
    }

    return res.json(user);
  },
  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    if (!user) {
      throw new GlobalError(
        'Problemas ao criar o usuario, verifique os dados e tente novamente',
        400
      );
    }

    return res.json({ message: 'Usuário criado com sucesso', user });
  },
};
