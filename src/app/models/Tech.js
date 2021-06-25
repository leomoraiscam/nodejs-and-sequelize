import { Model, DataTypes } from 'sequelize';

class Tech extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
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
        tableName: 'techs',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'tech_id',
      through: 'user_techs',
      as: 'users',
    });
    this.belongsToMany(models.Project, {
      foreignKey: 'tech_id',
      through: 'project_techs',
      as: 'projects',
    });
  }
}

export default Tech;
