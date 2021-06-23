import UsersRepository from '../../repositories/UsersRepository';
import GlobalError from '../../../errors/GlobalError';

class CreateUsersService {
  async execute({ name, email }) {
    const usersRepository = new UsersRepository();

    const userAlreadyExist = await usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new GlobalError('user with this email already exist', 409);
    }

    const user = await usersRepository.create({
      name,
      email,
    });

    return user;
  }
}

export default CreateUsersService;
