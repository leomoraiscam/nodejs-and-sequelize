import User from '../models/User';

class UsersRepository {
  async findById(id) {
    return User.findByPk(id, {
      include: [
        {
          association: 'techs',
          attributes: ['name'],
          through: { attributes: [] },
        },
        {
          association: 'addresses',
          attributes: ['zip_code', 'street', 'number'],
        },
      ],
    });
  }

  async findByEmail(email) {
    return User.findOne({
      where: {
        email,
      },
    });
  }

  async create({ name, email }) {
    return User.create({
      name,
      email,
    });
  }

  async delete(id) {
    return User.destroy({
      where: {
        id,
      },
    });
  }
}

export default new UsersRepository();
