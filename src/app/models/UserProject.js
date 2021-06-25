import { Model, DataTypes } from 'sequelize';

class UserProject extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.STRING,
        project_id: DataTypes.STRING,
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
        tableName: 'user_projects',
        timestamps: true,
      }
    );
    return this;
  }
}

export default UserProject;
