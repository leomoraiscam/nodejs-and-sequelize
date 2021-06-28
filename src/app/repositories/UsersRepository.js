import { Op } from 'sequelize';
import User from '../models/User';

class UsersRepository {
  async list({ email, street, nameTech, page = 1, limit = 10 }) {
    return User.findAll({
      limit,
      offset: ((page || 1) - 1) * limit,
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: `%${email}`,
        },
      },
      include: [
        {
          association: 'addresses',
          attributes: ['id', 'zip_code', 'number'],
          where: {
            street,
          },
        },
        {
          association: 'techs',
          attributes: ['id', 'name'],
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
          attributes: ['id', 'title'],
          through: { attributes: [] },
        },
      ],
    });
  }

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
          include: [
            {
              association: 'techs',
              attributes: ['id', 'name'],
              through: { attributes: [] },
            },
          ],
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
