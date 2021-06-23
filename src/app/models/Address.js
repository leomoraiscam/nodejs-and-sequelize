import { Model, DataTypes } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zip_code: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
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
        tableName: 'addresses',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Address;
