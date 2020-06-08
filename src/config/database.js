require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.HOST,
  username: 'postgres',
  password: process.env.PASSWORD,
  database: 'sequelize_example',
  define: {
    timestamps: true,
    underscored: true,
  },
};
