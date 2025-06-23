import express from 'express';
import { RequestHandler } from 'express';

import {
  createUser,
  getAllUsers,
  getSingleUser,
  addBookmark,
  getBookmarks,
  removeBookmark,
} from './user.controller';

const router = express.Router();

router.post('/create-user', createUser); // Create user
router.get('/', getAllUsers); // Get all users

// ইউজারের তথ্য পাওয়া
router.get('/:id', getSingleUser as RequestHandler);

// বুকমার্ক যোগ করা
router.patch('/bookmark/:id', addBookmark as RequestHandler);

// সকল বুকমার্ক পাওয়া
router.get('/all-bookmarks/:id', getBookmarks as RequestHandler);

// বুকমার্ক সরানো
router.delete('/removebookmarks/:id/:bookId', removeBookmark as RequestHandler);
export const UserRoutes = router;
