import UsersRepository from '../../repositories/UsersRepository';
import AddressesRepository from '../../repositories/AddressesRepository';
import GlobalError from '../../../errors/GlobalError';

class UpdateAddressService {
  async execute({ user_id, zip_code, street, number }) {
    const usersRepository = new UsersRepository();
    const addressesRepository = new AddressesRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    const address = await addressesRepository.findByAddressByUser({
      user_id,
      zip_code,
    });

    if (!address) {
      throw new GlobalError('this address not found', 404);
    }

    Object.assign(address, {
      zip_code,
      street,
      number,
    });

    const updatedAddress = await addressesRepository.update(address);

    return updatedAddress;
  }
}

export default UpdateAddressService;
