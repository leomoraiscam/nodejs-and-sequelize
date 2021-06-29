import UsersRepository from '../../repositories/UsersRepository';
import ProjectsRepository from '../../repositories/ProjectsRepository';
import UserProjectsRepository from '../../repositories/UserProjectsRepository';

import GlobalError from '../../../errors/GlobalError';

class CreateUserProjectService {
  async execute({ project_id, users_id }) {
    const usersRepository = new UsersRepository();
    const projectsRepository = new ProjectsRepository();
    const userProjectsRepository = new UserProjectsRepository();

    const project = await projectsRepository.findById(project_id);

    if (!project) {
      throw new GlobalError('this specif project not found', 404);
    }

    const verifyUsers = users_id.map(async (user) => {
      const userAlreadyExist = await usersRepository.findById(user);

      if (!userAlreadyExist) {
        throw new GlobalError('this specif user not found', 404);
      }

      const userExist = await userProjectsRepository.findProjectByUser({
        user_id: user,
        project_id: project.id,
      });

      return userExist;
    });

    const allUsers = await Promise.all(verifyUsers);

    const uniqueUser = users_id
      .filter(
        (user) => !allUsers.find((dbUser) => dbUser && dbUser.user_id === user)
      )
      .map((userProject) => {
        return {
          user_id: userProject,
          project_id: project.id,
        };
      });

    const insertUsersProject = await Promise.all(uniqueUser);

    await userProjectsRepository.createAll(insertUsersProject);
  }
}

export default CreateUserProjectService;
