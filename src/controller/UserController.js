const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const user = await User.findAll();

      return res.json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async store(req, res) {
    try {
      const { name, email } = req.body;

      const user = await User.create({ name, email });

      return res.json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
