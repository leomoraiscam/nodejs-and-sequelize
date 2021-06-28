import CreateAddressService from '../services/addresses/CreateAddressService';
import UpdateAddressService from '../services/addresses/UpdateAddressService';
import DeleteAddressService from '../services/addresses/DeleteAddressService';

class AddressController {
  async create(request, response) {
    const { user: user_id } = request;
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
    const { zip_code, street, number } = request.body;
    const { user: user_id } = request;

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
    const { user: user_id } = request;
    const { zip_code } = request.params;

    const deleteAddressService = new DeleteAddressService();

    await deleteAddressService.execute({
      user_id,
      zip_code,
    });

    return response.status(201).send();
  }
}

export default AddressController;
