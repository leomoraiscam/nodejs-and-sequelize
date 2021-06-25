import DeleteUserProject from '../services/userProject/DeleteUserProject';
import CreateUserProject from '../services/userProject/CreateUserProject';

class UserProjectController {
  async create(request, response) {
    const { users_id, project_id } = request.body;

    const createUserProject = new CreateUserProject();

    await createUserProject.execute({
      users_id,
      project_id,
    });

    return response.status(201).send();
  }

  async delete(request, response) {
    const { user_id, project_id } = request.params;

    const deleteUserProject = new DeleteUserProject();

    await deleteUserProject.execute({
      user_id,
      project_id,
    });

    return response.status(201).send();
  }
}

export default UserProjectController;
