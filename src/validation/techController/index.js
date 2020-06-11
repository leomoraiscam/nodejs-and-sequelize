const yup = require('yup');

module.exports = {
  async store(req, res, next) {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
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
