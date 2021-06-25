import UsersRepository from '../../repositories/UsersRepository';
import ProjectsRepository from '../../repositories/ProjectsRepository';
import GlobalError from '../../../errors/GlobalError';

class UpdateProjectsService {
  async execute({ project_id, title }) {
    const projectsRepository = new ProjectsRepository();

    const project = await projectsRepository.findById(project_id);

    if (!project) {
      throw new GlobalError('this project not found', 404);
    }

    Object.assign(project, {
      title,
    });

    const updatedProject = await projectsRepository.update(project);

    return updatedProject;
  }
}

export default UpdateProjectsService;
