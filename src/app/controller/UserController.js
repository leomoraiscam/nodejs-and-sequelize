import CreateUsersService from '../services/users/CreateUsersService';
import ShowUsersService from '../services/users/ShowUsersService';
import DeleteUsersService from '../services/users/DeleteUsersService';

class UserController {
  async show(request, response) {
    const { id } = request.params;

    const showUsersService = new ShowUsersService();

    const user = await showUsersService.execute(id);

    return response.status(200).json(user);
  }

  async create(request, response) {
    const { name, email } = request.body;

    const createUsersService = new CreateUsersService();

    const user = await createUsersService.execute({
      name,
      email,
    });

    return response.status(201).json(user);
  }

  async delete(request, response) {
    const { id } = request.params;

    const deleteUsersService = new DeleteUsersService();

    await deleteUsersService.execute(id);

    return response.status(204).send();
  }
}

export default UserController;
