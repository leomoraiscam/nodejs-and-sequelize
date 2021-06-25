import Tech from '../models/Tech';

class TechsRepository {
  async findById(tech_id) {
    return Tech.findOne({
      where: {
        id: tech_id,
      },
    });
  }

  async create({ name }) {
    return Tech.findOrCreate({
      where: {
        name,
      },
    });
  }

  async update(tech) {
    return tech.save();
  }
}

export default TechsRepository;
