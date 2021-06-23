import UsersRepository from '../../repositories/UsersRepository';
import GlobalError from '../../../errors/GlobalError';

class SearchUsersService {
  async execute({ email, street, nameTech }) {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.searchUsers({ email, street, nameTech });

    if (!user) {
      throw new GlobalError('user not found', 404);
    }

    return user;
  }
}

export default SearchUsersService;
