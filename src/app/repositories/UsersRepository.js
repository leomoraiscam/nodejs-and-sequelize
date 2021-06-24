import { Op } from 'sequelize';
import User from '../models/User';

class UsersRepository {
  async findById(id) {
    return User.findByPk(id, {
      attributes: ['id', 'name', 'email'],
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
        {
          association: 'projects',
          through: { attributes: [] },
          attributes: ['title'],
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
        {
          association: 'projects',
          through: { attributes: [] },
        },
      ],
    });
  }

  async create({ name, email, password }) {
    return User.create({
      name,
      email,
      password,
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
