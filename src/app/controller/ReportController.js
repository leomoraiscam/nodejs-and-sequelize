import SearchUsersService from '../services/users/SearchUsersService';

class ReportController {
  async show(request, response) {
    const { email, street, nameTech } = request.query;

    const searchUsersService = new SearchUsersService();

    const users = await searchUsersService.execute({
      email,
      street,
      nameTech,
    });

    return response.json(users);
  }
}

export default ReportController;
