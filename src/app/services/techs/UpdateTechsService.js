import TechsRepository from '../../repositories/TechsRepository';
import GlobalError from '../../../errors/GlobalError';

class UpdateTechsService {
  async execute({ tech_id, name }) {
    const techsRepository = new TechsRepository();

    const tech = await techsRepository.findById(tech_id);

    if (!tech) {
      throw new GlobalError('this tech not found', 404);
    }

    Object.assign(tech, {
      name,
    });

    const updatedTech = await techsRepository.update(tech);

    return updatedTech;
  }
}

export default UpdateTechsService;
