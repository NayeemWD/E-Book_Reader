import { Request, Response } from 'express';
import { User } from './user.model';
import bcrypt from 'bcrypt';

// import { Book } from '../book/book.model'; // optional: for checking valid bookId

// Create User
// export const createUser = async (req: Request, res: Response) => {
//   const { name, email, password } = req.body;
//   const user = await User.create({ name, email, password });
//   res.status(201).json({ success: true, data: user });
// };

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  res.status(201).json({ user });
};

// Get All Users
export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json({ success: true, data: users });
};

// Get Single User
export const getSingleUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  if (!user)
    return res.status(404).json({ success: false, message: 'User not found' });
  res.json({ success: true, data: user });
};

// Add Bookmark
export const addBookmark = async (req: Request, res: Response) => {
  const { bookId } = req.body;
  const user = await User.findById(req.params.id);

  if (!user)
    return res.status(404).json({ success: false, message: 'User not found' });

  if (!user.bookmarks.includes(bookId)) {
    user.bookmarks.push(bookId);
    await user.save();
  }

  res.json({ success: true, data: user.bookmarks });
};

// Get All Bookmarks
export const getBookmarks = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id).populate('bookmarks');
  if (!user)
    return res.status(404).json({ success: false, message: 'User not found' });
  res.json({ success: true, data: user.bookmarks });
};

// Remove Bookmark
export const removeBookmark = async (req: Request, res: Response) => {
  const { id, bookId } = req.params;
  const user = await User.findById(id);
  if (!user)
    return res.status(404).json({ success: false, message: 'User not found' });

  user.bookmarks = user.bookmarks.filter((b) => b.toString() !== bookId);
  await user.save();

  res.json({
    success: true,
    message: 'Bookmark removed',
    data: user.bookmarks,
  });
};
