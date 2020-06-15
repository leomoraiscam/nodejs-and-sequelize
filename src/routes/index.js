import { Router } from 'express';

import User from './userController';
import Address from './addressController';
import Tech from './techController';
import Report from './reportController';

const routes = new Router();

const loaderRoutes = [User, Address, Tech, Report];

loaderRoutes.map((res) => routes.use(res));

export default routes;
