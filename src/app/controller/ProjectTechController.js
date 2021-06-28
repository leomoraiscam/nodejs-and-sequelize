import CreateTechsProject from '../services/projectTechs/CreateTechsProject';

class ProjectTechController {
  async create(request, response) {
    const { tech_ids, project_id } = request.body;

    const createTechsProject = new CreateTechsProject();

    await createTechsProject.execute({
      tech_ids,
      project_id,
    });

    return response.status(201).send();
  }
}

export default ProjectTechController;
