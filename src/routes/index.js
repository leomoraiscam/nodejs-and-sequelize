import { Router } from 'express';

import User from './user';
import Address from './address';
import Tech from './tech';
import Session from './session';
import Project from './project';
import UserProject from './userProject';
import TechProject from './techProjects';

const routes = new Router();

const loaderRoutes = [
  User,
  Address,
  Tech,
  Session,
  Project,
  UserProject,
  TechProject,
];

loaderRoutes.map((res) => routes.use(res));

export default routes;
