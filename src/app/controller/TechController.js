import CreateTechsService from '../services/techs/CreateTechsService';

class TechController {
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const tech = await CreateTechsService.execute({
      user_id,
      name,
    });

    return res.status(201).json(tech);
  }
}

export default new TechController();
