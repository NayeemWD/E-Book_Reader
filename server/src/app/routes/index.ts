import { Router } from 'express';
import { BookRoutes } from '../modules/books/book.route';

const router = Router();

const modeuleRoutes = [
  {
    path: '/books',
    route: BookRoutes,
  },
];

modeuleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
