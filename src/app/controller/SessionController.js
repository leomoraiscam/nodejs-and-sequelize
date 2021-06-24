import SessionService from '../services/auth/SessionService';

class SessionController {
  async create(request, response) {
    const { email, password } = request.body;

    const sessionService = new SessionService();

    const session = await sessionService.execute({
      email,
      password,
    });

    return response.status(201).json(session);
  }
}

export default SessionController;
