import User from '../models/User';

class UsersRepository {
  async create({ name, email }) {
    return User.create({
      name,
      email,
    });
  }

  findById(id) {
    return User.findByPk(id);
  }

  async findByEmail(email) {
    return User.findOne({
      where: {
        email,
      },
    });
  }
}

export default new UsersRepository();
