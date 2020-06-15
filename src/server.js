import http from 'http';
import Server from './app';

const server = http.Server(Server);

server.listen(process.env.PORT || process.env.APP_PORT, () =>
  console.log(
    `Server ouvindo a porta -> ${process.env.PORT || process.env.APP_PORT}`
  )
);
