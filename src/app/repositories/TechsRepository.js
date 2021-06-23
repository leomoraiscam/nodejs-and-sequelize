import Tech from '../models/Tech';

class TechsRepository {
  async create({ name }) {
    return Tech.findOrCreate({
      where: {
        name,
      },
    });
  }
}

export default TechsRepository;
