import UsersRepository from '../../repositories/UsersRepository';
import ProjectsRepository from '../../repositories/ProjectsRepository';
import UserProjectsRepository from '../../repositories/UserProjectsRepository';

import GlobalError from '../../../errors/GlobalError';

class CreateUserProjectService {
  async execute({ project_id, users_id }) {
    const usersRepository = new UsersRepository();
    const projectsRepository = new ProjectsRepository();
    const userProjectsRepository = new UserProjectsRepository();

    const verifyUsers = users_id.map(async (user) => {
      const userExist = await usersRepository.findById(user);

      if (!user) {
        throw new GlobalError('this specif user not found', 404);
      }

      return userExist;
    });

    await Promise.all(verifyUsers);

    const project = await projectsRepository.findById(project_id);

    if (!project) {
      throw new GlobalError('this specif project not found', 404);
    }

    const items = users_id.map((userProject) => {
      return {
        user_id: userProject,
        project_id: project.id,
      };
    });

    const insertUsersProject = await Promise.all(items);

    await userProjectsRepository.createAll(insertUsersProject);
  }
}

export default CreateUserProjectService;
