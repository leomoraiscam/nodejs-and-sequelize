import CreateTechsService from '../services/techs/CreateTechsService';

class TechController {
  async create(request, response) {
    const { user_id } = request.params;
    const { name } = request.body;

    const createTechsService = new CreateTechsService();

    const tech = await createTechsService.execute({
      user_id,
      name,
    });

    return response.status(201).json(tech);
  }
}

export default TechController;
