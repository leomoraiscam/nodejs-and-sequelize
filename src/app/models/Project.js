import { Model, DataTypes } from 'sequelize';

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        createdAt: {
          type: DataTypes.DATE,
          field: 'created_at',
        },
        updatedAt: {
          type: DataTypes.DATE,
          field: 'updated_at',
        },
      },
      {
        sequelize,
        tableName: 'projects',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'project_id',
      through: 'user_projects',
      as: 'users',
    });
  }
}

export default Project;
