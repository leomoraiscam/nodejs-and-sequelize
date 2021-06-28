import UsersRepository from '../../repositories/UsersRepository';
import AddressesRepository from '../../repositories/AddressesRepository';
import GlobalError from '../../../errors/GlobalError';

class DeleteAddressService {
  async execute({ user_id, zip_code }) {
    const usersRepository = new UsersRepository();
    const addressesRepository = new AddressesRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    const address = await addressesRepository.findByZipCode(zip_code);

    if (!address) {
      throw new GlobalError('this address not found', 404);
    }

    await addressesRepository.delete(zip_code);
  }
}

export default DeleteAddressService;
