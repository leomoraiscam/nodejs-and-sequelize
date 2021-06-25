import UserProject from '../models/UserProject';

class UserProjectsRepository {
  async findProjectByUser({ project_id, user_id }) {
    return UserProject.findOne({
      where: {
        project_id,
        user_id,
      },
    });
  }

  async createAll(usersProject) {
    return UserProject.bulkCreate(usersProject);
  }

  async delete(id) {
    return UserProject.destroy({
      where: {
        id,
      },
    });
  }
}

export default UserProjectsRepository;
