import CreateProjectService from '../services/projects/CreateProjectService';
import UpdateProjectService from '../services/projects/UpdateProjectService';

class ProjectController {
  async create(request, response) {
    const { user_id } = request.params;
    const { title, tech_ids } = request.body;

    const createProjectService = new CreateProjectService();

    const project = await createProjectService.execute({
      user_id,
      title,
      tech_ids,
    });

    return response.status(201).json(project);
  }

  async update(request, response) {
    const { project_id } = request.params;
    const { title } = request.body;

    const updateProjectService = new UpdateProjectService();

    const address = await updateProjectService.execute({
      project_id,
      title,
    });

    return response.status(201).json(address);
  }
}

export default ProjectController;
