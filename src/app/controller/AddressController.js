import User from '../models/User';
import Address from '../models/Address';
import GlobalError from '../../errors/GlobalError';

class AddressController {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' },
    });

    if (!user) {
      throw new GlobalError('Usuário não encontrado', 204);
    }

    return res.json(user);
  }

  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      throw new GlobalError(
        'Verifique as informações passadas e tente novamente',
        400
      );
    }

    const address = await Address.create({
      user_id,
      zipcode,
      street,
      number,
    });

    return res.json({ message: 'Endereço criado com sucesso', address });
  }
}

export default new AddressController();