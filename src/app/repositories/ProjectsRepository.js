import Project from '../models/Project';

class ProjectRepository {
  async create({ title }) {
    return Project.findOrCreate({
      where: {
        title,
      },
    });
  }
}

export default ProjectRepository;
