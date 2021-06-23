import CreateAddressService from '../services/addresses/CreateAddressService';

class AddressController {
  async store(req, res) {
    const { user_id } = req.params;
    const { zip_code, street, number } = req.body;

    const address = await CreateAddressService.execute({
      user_id,
      zip_code,
      street,
      number,
    });

    return res.status(201).json(address);
  }
}

export default new AddressController();
