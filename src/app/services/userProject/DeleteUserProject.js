import UsersRepository from '../../repositories/UsersRepository';
import ProjectsRepository from '../../repositories/ProjectsRepository';
import UserProjectsRepository from '../../repositories/UserProjectsRepository';

import GlobalError from '../../../errors/GlobalError';

class DeleteAddressService {
  async execute({ project_id, user_id }) {
    const usersRepository = new UsersRepository();
    const projectsRepository = new ProjectsRepository();
    const userProjectsRepository = new UserProjectsRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    const project = await projectsRepository.findById(project_id);

    if (!project) {
      throw new GlobalError('this specif project not found', 404);
    }

    const projectUser = await userProjectsRepository.findProjectByUser({
      project_id,
      user_id,
    });

    if (!projectUser) {
      throw new GlobalError('this project doesnt not exist for this user', 404);
    }

    await userProjectsRepository.delete(projectUser.id);
  }
}

export default DeleteAddressService;
