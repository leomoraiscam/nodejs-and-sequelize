import UsersRepository from '../../repositories/UsersRepository';
import GlobalError from '../../../errors/GlobalError';

class DeleteUsersService {
  async execute(user_id) {
    const user = await UsersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    await UsersRepository.delete(user_id);
  }
}

export default new DeleteUsersService();
