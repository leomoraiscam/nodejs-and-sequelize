import CreateAddressService from '../services/addresses/CreateAddressService';

class AddressController {
  async create(request, response) {
    const { user_id } = request.params;
    const { zip_code, street, number } = request.body;

    const createAddressService = new CreateAddressService();

    const address = await createAddressService.execute({
      user_id,
      zip_code,
      street,
      number,
    });

    return response.status(201).json(address);
  }
}

export default AddressController;
