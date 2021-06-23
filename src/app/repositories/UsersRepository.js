import { Op } from 'sequelize';
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

  async searchUsers({ email, street, nameTech }) {
    return User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: `%${email}`,
        },
      },
      include: [
        {
          association: 'addresses',
          where: {
            street,
          },
        },
        {
          association: 'techs',
          required: false,
          through: { attributes: [] },
          where: {
            name: {
              [Op.iLike]: `${nameTech}%`,
            },
          },
        },
      ],
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

export default UsersRepository;
