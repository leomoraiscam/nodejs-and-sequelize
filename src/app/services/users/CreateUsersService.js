import { hash } from 'bcryptjs';
import UsersRepository from '../../repositories/UsersRepository';
import GlobalError from '../../../errors/GlobalError';

class CreateUsersService {
  async execute({ name, email, password }) {
    const usersRepository = new UsersRepository();

    const userAlreadyExist = await usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new GlobalError('user with this email already exist', 409);
    }

    const hashedPassword = await hash(password, 8);

    const user = await usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUsersService;
