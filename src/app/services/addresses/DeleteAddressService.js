import UsersRepository from '../../repositories/UsersRepository';
import AddressesRepository from '../../repositories/AddressesRepository';
import GlobalError from '../../../errors/GlobalError';

class DeleteAddressService {
  async execute({ user_id, address_id }) {
    const usersRepository = new UsersRepository();
    const addressesRepository = new AddressesRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    const address = await addressesRepository.findById({
      user_id,
      address_id,
    });

    if (!address) {
      throw new GlobalError('this address not found', 404);
    }

    await addressesRepository.delete(address_id);
  }
}

export default DeleteAddressService;
