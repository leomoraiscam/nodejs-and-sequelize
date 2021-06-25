import Project from '../models/Project';

class ProjectRepository {
  async findById(project_id) {
    return Project.findOne({
      where: {
        id: project_id,
      },
    });
  }

  async create({ title }) {
    return Project.findOrCreate({
      where: {
        title,
      },
    });
  }

  async update(project) {
    return project.save();
  }
}

export default ProjectRepository;
