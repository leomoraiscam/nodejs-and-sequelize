import CreateUsersService from '../services/users/CreateUsersService';
import ShowUsersService from '../services/users/ShowUsersService';
import DeleteUsersService from '../services/users/DeleteUsersService';
import ListUsersService from '../services/users/ListUsersService';

class UserController {
  async list(request, response) {
    const { email, street, nameTech } = request.query;
    const { limit, page } = request.query;

    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute({
      email,
      street,
      nameTech,
      limit,
      page,
    });

    return response.json(users);
  }

  async show(request, response) {
    const { user: id } = request;

    const showUsersService = new ShowUsersService();

    const user = await showUsersService.execute(id);

    return response.status(200).json(user);
  }

  async create(request, response) {
    const { name, email, password } = request.body;

    const createUsersService = new CreateUsersService();

    const user = await createUsersService.execute({
      name,
      email,
      password,
    });

    const serializedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.created_at,
    };

    return response.status(201).json(serializedUser);
  }

  async delete(request, response) {
    const { user: id } = request;

    const deleteUsersService = new DeleteUsersService();

    await deleteUsersService.execute(id);

    return response.status(204).send();
  }
}

export default UserController;
