import { Model, DataTypes } from 'sequelize';

class UserTechs extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.STRING,
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
        tableName: 'user_techs',
        timestamps: true,
      }
    );
    return this;
  }
}

export default UserTechs;
