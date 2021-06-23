import UsersRepository from '../../repositories/UsersRepository';
import GlobalError from '../../../errors/GlobalError';

class DeleteUsersService {
  async execute(id) {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    await usersRepository.delete(id);
  }
}

export default DeleteUsersService;
