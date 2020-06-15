const yup = require('yup');

module.exports = {
  async store(req, res, next) {
    try {
      const schema = yup.object().shape({
        zipcode: yup.string().required(),
        street: yup.string().required(),
        number: yup.number().positive().integer().required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Validation fail', message: error.inner });
    }
  },
};
