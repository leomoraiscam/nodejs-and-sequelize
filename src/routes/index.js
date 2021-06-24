import { Router } from 'express';

import User from './userController';
import Address from './addressController';
import Tech from './techController';
import Report from './reportController';
import Session from './sessionController';
import Project from './projectController';

const routes = new Router();

const loaderRoutes = [User, Address, Tech, Report, Session, Project];

loaderRoutes.map((res) => routes.use(res));

export default routes;
