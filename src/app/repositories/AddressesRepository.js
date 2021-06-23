import Address from '../models/Address';

class AddressRepository {
  async create({ user_id, zip_code, street, number }) {
    return Address.create({
      user_id,
      zip_code,
      street,
      number,
    });
  }

  async findByAddressByUser({ user_id, zip_code }) {
    return Address.findOne({
      where: {
        user_id,
        zip_code,
      },
    });
  }
}

export default new AddressRepository();
