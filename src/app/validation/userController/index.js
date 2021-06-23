const yup = require('yup');

module.exports = {
  async create(request, response, next) {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
      });

      await schema.validate(request.body, { abortEarly: false });

      return next();
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Validation fail', message: error.inner });
    }
  },
  async show(request, response, next) {
    try {
      const schema = yup.object().shape({
        id: yup.number().positive().integer().required(),
      });

      await schema.validate(request.params, { abortEarly: false });

      return next();
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Validation fail', message: error.inner });
    }
  },

  async delete(request, response, next) {
    try {
      const schema = yup.object().shape({
        id: yup.number().positive().integer().required(),
      });

      await schema.validate(request.params, { abortEarly: false });

      return next();
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Validation fail', message: error.inner });
    }
  },
};
