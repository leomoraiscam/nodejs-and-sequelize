import UsersRepository from '../../repositories/UsersRepository';
import TechsRepository from '../../repositories/TechsRepository';
import GlobalError from '../../../errors/GlobalError';

class CreateTechsService {
  async execute({ user_id, name }) {
    const usersRepository = new UsersRepository();
    const techsRepository = new TechsRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    const [tech] = await techsRepository.create({
      name,
    });

    user.addTech(tech);

    return tech;
  }
}

export default CreateTechsService;
