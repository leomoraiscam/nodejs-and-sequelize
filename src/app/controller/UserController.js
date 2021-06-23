import CreateUsersService from '../services/users/CreateUsersService';
import ShowUsersService from '../services/users/ShowUsersService';

class UserController {
  async show(request, response) {
    const { id } = request.params;

    const user = await ShowUsersService.execute(id);

    return response.status(200).json(user);
  }

  async create(request, response) {
    const { name, email } = request.body;

    const user = await CreateUsersService.execute({
      name,
      email,
    });

    return response.status(201).json(user);
  }
}

export default new UserController();
