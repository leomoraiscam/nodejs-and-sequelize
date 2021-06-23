import UsersRepository from '../../repositories/UsersRepository';
import AddressesRepository from '../../repositories/AddressesRepository';
import GlobalError from '../../../errors/GlobalError';

class CreateUsersService {
  async execute({ user_id, zip_code, street, number }) {
    const usersRepository = new UsersRepository();
    const addressesRepository = new AddressesRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    const addressAlreadyExistByUser =
      await addressesRepository.findByAddressByUser({
        user_id,
        zip_code,
      });

    if (addressAlreadyExistByUser) {
      throw new GlobalError('this address already exist for you', 409);
    }

    const address = await addressesRepository.create({
      user_id,
      zip_code,
      street,
      number,
    });

    return address;
  }
}

export default CreateUsersService;
