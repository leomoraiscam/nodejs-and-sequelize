import UsersRepository from '../../repositories/UsersRepository';
import GlobalError from '../../../errors/GlobalError';

class CreateUsersService {
  async execute({ name, email }) {
    const userAlreadyExist = await UsersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new GlobalError('user with this email already exist', 409);
    }

    const user = await UsersRepository.create({
      name,
      email,
    });

    return user;
  }
}

export default new CreateUsersService();
