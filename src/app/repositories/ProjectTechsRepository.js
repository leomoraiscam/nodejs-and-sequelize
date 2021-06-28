import ProjectTechs from '../models/ProjectTechs';

class ProjectTechsRepository {
  async createAll(projectTech) {
    return ProjectTechs.bulkCreate(projectTech);
  }

  async findTechByProject({ tech_id, project_id }) {
    return ProjectTechs.findOne({
      where: {
        tech_id,
        project_id,
      },
    });
  }

  async delete({ tech_id, project_id }) {
    return ProjectTechs.destroy({
      where: {
        tech_id,
        project_id,
      },
    });
  }
}

export default ProjectTechsRepository;
