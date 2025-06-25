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

// update

// router.post(
//   '/create-book',
//   // authMiddleware, // প্রথমে authentication
//   // checkAdmin, // তারপর admin চেক
//   validateRequest(createBookZodSchema), // তারপর validation
//   createBook // সব শেষে controller
// );

router.post(
  '/create-book',
  validateRequest(createBookZodSchema),
  (req, res, next) => {
    createBook(req, res, next).catch(next);
  }
);

// router.post(
//   '/create-book',
//   validateRequest(createBookZodSchema),
//   (req, res, next) => {
//     createBook(req, res, next).catch(next); // ✅ THIS FIXES THE ERROR
//   }
// );

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
