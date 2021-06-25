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

  async update(address) {
    return address.save();
  }

  async delete(id) {
    return Address.destroy({
      where: {
        id,
      },
    });
  }

  async findById({ user_id, address_id }) {
    return Address.findOne({
      where: {
        id: address_id,
        user_id,
      },
    });
  }

  async findByZipCode(zip_code) {
    return Address.findOne({
      where: {
        zip_code,
      },
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

export default AddressRepository;
