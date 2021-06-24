import { Model, DataTypes } from 'sequelize';

class ProjectTechs extends Model {
  static init(sequelize) {
    super.init(
      {
        project_id: DataTypes.STRING,
        tech_id: DataTypes.STRING,
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
        tableName: 'project_techs',
        timestamps: true,
      }
    );
    return this;
  }
}

export default ProjectTechs;
