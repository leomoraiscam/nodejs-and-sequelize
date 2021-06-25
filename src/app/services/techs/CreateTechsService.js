import UsersRepository from '../../repositories/UsersRepository';
import TechsRepository from '../../repositories/TechsRepository';
import UserTechsRepository from '../../repositories/UserTechsRepository';
import GlobalError from '../../../errors/GlobalError';

class CreateTechsService {
  async execute({ user_id, name }) {
    const usersRepository = new UsersRepository();
    const techsRepository = new TechsRepository();
    const userTechsRepository = new UserTechsRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    const [tech] = await techsRepository.create({
      name,
    });

    await userTechsRepository.create({
      user_id: user.id,
      tech_id: tech.id,
    });

    return tech;
  }
}

export default CreateTechsService;
