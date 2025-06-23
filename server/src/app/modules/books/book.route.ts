// import { authMiddleware } from '../../middlewares/auth';
// import { checkAdmin } from '../../middlewares/isAdmin';
// import express from 'express';
// import {
//   createBook,
//   getBooks,
//   getSingleBook,
//   updateBook,
//   deleteBook,
// } from './book.controller';
// import validateRequest from '../../middlewares/validateRequest';
// import { createBookZodSchema, updateBookZodSchema } from './book.validation';
// // import { authUser } from '../../middlewares/auth';
// // import { checkAdmin } from '../../middlewares/isAdmin'; // optional custom middleware

// const router = express.Router();

// // router.post('/create-book', validateRequest(createBookZodSchema), createBook);
// router.post(
//   '/create-book',
//   authMiddleware,
//   checkAdmin,
//   validateRequest(createBookZodSchema),
//   createBook
// );

// router.get('/', getBooks);
// router.get('/:id', getSingleBook);
// router.patch('/:id', validateRequest(updateBookZodSchema), updateBook);
// router.delete('/:id', deleteBook);

// router.post(
//   '/create-book',

//   validateRequest(createBookZodSchema),
//   createBook
// );

// export const BookRoutes = router;

import express from 'express';
// import { authMiddleware } from '../../middlewares/auth';
// import { checkAdmin } from '../../middlewares/isAdmin';
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

// router.post(
//   '/',
//   authMiddleware,
//   checkAdmin,
//   validateRequest(createBookZodSchema),
//   createBook
// );
router.post(
  '/create-book',
  // authMiddleware, // প্রথমে authentication
  // checkAdmin, // তারপর admin চেক
  validateRequest(createBookZodSchema), // তারপর validation
  createBook // সব শেষে controller
);

router.get('/', getBooks);
router.get('/:id', getSingleBook);
router.patch(
  '/:id',
  // authMiddleware,
  validateRequest(updateBookZodSchema),
  updateBook
);
router.delete(
  '/:id',
  // authMiddleware,
  // checkAdmin,
  deleteBook
);

export const BookRoutes = router;
