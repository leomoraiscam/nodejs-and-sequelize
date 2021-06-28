import ProjectTechsRepository from '../../repositories/ProjectTechsRepository';
import ProjectsRepository from '../../repositories/ProjectsRepository';
import TechsRepository from '../../repositories/TechsRepository';

import GlobalError from '../../../errors/GlobalError';

class CreateTechsProjectService {
  async execute({ tech_ids, project_id }) {
    const projectTechsRepository = new ProjectTechsRepository();
    const projectsRepository = new ProjectsRepository();
    const techsRepository = new TechsRepository();

    const verifyTechs = tech_ids.map(async (user) => {
      const techExist = await techsRepository.findById(user);

      if (!user) {
        throw new GlobalError('this specif tech not found', 404);
      }

      return techExist;
    });

    await Promise.all(verifyTechs);

    const project = await projectsRepository.findById(project_id);

    if (!project) {
      throw new GlobalError('this specif project not found', 404);
    }

    const items = tech_ids.map((techProject) => {
      return {
        tech_id: techProject,
        project_id: project.id,
      };
    });

    const insertTechsProject = await Promise.all(items);

    await projectTechsRepository.createAll(insertTechsProject);
  }
}

export default CreateTechsProjectService;
