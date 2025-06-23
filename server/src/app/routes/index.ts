import { Router } from 'express';
import { BookRoutes } from '../modules/books/book.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';

const router = Router();

const modeuleRoutes = [
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

modeuleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
