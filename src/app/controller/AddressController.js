import CreateAddressService from '../services/addresses/CreateAddressService';
import UpdateAddressService from '../services/addresses/UpdateAddressService';
import DeleteAddressService from '../services/addresses/DeleteAddressService';

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

  async update(request, response) {
    const { user_id } = request.params;
    const { zip_code, street, number } = request.body;

    const updateAddressService = new UpdateAddressService();

    const address = await updateAddressService.execute({
      user_id,
      zip_code,
      street,
      number,
    });

    return response.status(201).json(address);
  }

  async delete(request, response) {
    const { user_id, address_id } = request.params;

    const deleteAddressService = new DeleteAddressService();

    await deleteAddressService.execute({
      user_id,
      address_id,
    });

    return response.status(201).send();
  }
}

export default AddressController;
