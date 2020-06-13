require('dotenv').config();
require('./database');
require('express-async-errors');

const express = require('express');
const routes = require('./routes');
const GlobalError = require('./errors/GlobalError');

const app = express();

app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  if (err instanceof GlobalError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    statusCode: 'Error interno do servidor',
    codeMessage: err.message,
  });
});

app.listen(process.env.PORT || process.env.APP_PORT, () =>
  console.log(
    `Server is running in port  ${process.env.PORT || process.env.APP_PORT}`
  )
);
