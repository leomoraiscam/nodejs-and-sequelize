const yup = require('yup');

module.exports = {
  async create(request, response, next) {
    try {
      const schema = yup.object().shape({
        zip_code: yup.string().required(),
        street: yup.string().required(),
        number: yup.number().positive().integer().required(),
      });

      await schema.validate(request.body, { abortEarly: false });

      return next();
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Validation fail', message: error.inner });
    }
  },
};
