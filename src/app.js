import 'dotenv/config';
import './database';
import 'express-async-errors';
import express from 'express';
import routes from './routes';

import GlobalError from './errors/GlobalError';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  errorHandler() {
    this.server.use((err, req, res, next) => {
      if (err instanceof GlobalError) {
        return res.status(err.statusCode).json({
          status: 'erro',
          message: err.message,
        });
      }

      return res.status(500).json({
        status: 'erro',
        message: 'Erro interno do servidor',
        codeMessage: err.message,
      });
    });
  }
}

export default new App().server;
