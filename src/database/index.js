import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Address from '../app/models/Address';
import Techs from '../app/models/Tech';
import Project from '../app/models/Project';
import ProjectTechs from '../app/models/ProjectTechs';
import UserProject from '../app/models/UserProject';
import UserTechs from '../app/models/UserTechs';

const models = [
  User,
  Address,
  Techs,
  Project,
  ProjectTechs,
  UserProject,
  UserTechs,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
