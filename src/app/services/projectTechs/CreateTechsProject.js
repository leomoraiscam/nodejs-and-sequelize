import ProjectTechsRepository from '../../repositories/ProjectTechsRepository';
import ProjectsRepository from '../../repositories/ProjectsRepository';
import TechsRepository from '../../repositories/TechsRepository';

import GlobalError from '../../../errors/GlobalError';

class CreateTechsProjectService {
  async execute({ tech_ids, project_id }) {
    const projectTechsRepository = new ProjectTechsRepository();
    const projectsRepository = new ProjectsRepository();
    const techsRepository = new TechsRepository();

    const project = await projectsRepository.findById(project_id);

    if (!project) {
      throw new GlobalError('this specif project not found', 404);
    }

    const verifyTechs = tech_ids.map(async (tech) => {
      const techAlreadyExist = await techsRepository.findById(tech);

      if (!techAlreadyExist) {
        throw new GlobalError('this specif tech not found', 404);
      }

      const techExist = await projectTechsRepository.findTechByProject({
        tech_id: tech,
        project_id: project.id,
      });

      return techExist;
    });

    const allTechs = await Promise.all(verifyTechs);

    const uniquesTechsForProject = tech_ids
      .filter(
        (tech) => !allTechs.find((dbTech) => dbTech && dbTech.tech_id === tech)
      )
      .map((techProject) => {
        return {
          tech_id: techProject,
          project_id: project.id,
        };
      });

    const insertTechsProject = await Promise.all(uniquesTechsForProject);

    await projectTechsRepository.createAll(insertTechsProject);
  }
}

export default CreateTechsProjectService;
