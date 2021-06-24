import UsersRepository from '../../repositories/UsersRepository';
import ProjectsRepository from '../../repositories/ProjectsRepository';
import GlobalError from '../../../errors/GlobalError';

class CreateProjectService {
  async execute({ user_id, title }) {
    const usersRepository = new UsersRepository();
    const projectsRepository = new ProjectsRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('this specif user not found', 404);
    }

    const [project] = await projectsRepository.create({
      title,
    });

    console.log('project', project);

    // user.addProject(project);

    return project;
  }
}

export default CreateProjectService;
