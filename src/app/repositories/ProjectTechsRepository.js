import ProjectTechs from '../models/ProjectTechs';

class ProjectTechsRepository {
  async createAll(projectTech) {
    return ProjectTechs.bulkCreate(projectTech);
  }
}

export default ProjectTechsRepository;
