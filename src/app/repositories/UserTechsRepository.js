import UserTechs from '../models/UserTechs';

class UserTechsRepository {
  async create({ tech_id, user_id }) {
    return UserTechs.create({
      tech_id,
      user_id,
    });
  }
}

export default UserTechsRepository;
