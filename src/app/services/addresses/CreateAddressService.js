import UsersRepository from '../../repositories/UsersRepository';
import AddressesRepository from '../../repositories/AddressesRepository';
import GlobalError from '../../../errors/GlobalError';

class CreateUsersService {
  async execute({ user_id, zip_code, street, number }) {
    const user = await UsersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    const addressAlreadyExistByUser =
      await AddressesRepository.findByAddressByUser({
        user_id,
        zip_code,
      });

    console.log('addressAlreadyExistByUser', addressAlreadyExistByUser);

    if (addressAlreadyExistByUser) {
      throw new GlobalError('this address already exist for you', 409);
    }

    const address = await AddressesRepository.create({
      user_id,
      zip_code,
      street,
      number,
    });

    return address;
  }
}

export default new CreateUsersService();
