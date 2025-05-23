// import express from 'express';
// import {
//   createBook,
//   getBooks,
//   getSingleBook,
//   updateBook,
//   deleteBook,
// } from './book.controller';
// import validateRequest from '../middlewares/validateRequest';
// import { createBookZodSchema, updateBookZodSchema } from './book.validation';

// const router = express.Router();

// router.post('/', validateRequest(createBookZodSchema), createBook);
// router.get('/', getBooks);
// router.get('/:id', getSingleBook);
// router.patch('/:id', validateRequest(updateBookZodSchema), updateBook);
// router.delete('/:id', deleteBook);

// export const BookRoutes = router;

import express from 'express';
import {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} from './book.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createBookZodSchema, updateBookZodSchema } from './book.validation';

const router = express.Router();

router.post('/create-book', validateRequest(createBookZodSchema), createBook);
router.get('/', getBooks);
router.get('/:id', getSingleBook);
router.patch('/:id', validateRequest(updateBookZodSchema), updateBook);
router.delete('/:id', deleteBook);

export const BookRoutes = router;
