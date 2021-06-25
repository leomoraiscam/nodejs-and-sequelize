import CreateTechsService from '../services/techs/CreateTechsService';
import UpdateTechsService from '../services/techs/UpdateTechsService';

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

  async update(request, response) {
    const { tech_id } = request.params;
    const { name } = request.body;

    const updateTechsService = new UpdateTechsService();

    const tech = await updateTechsService.execute({
      tech_id,
      name,
    });

    return response.status(201).json(tech);
  }
}

export default TechController;
