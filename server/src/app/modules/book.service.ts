import { Book } from './book.model';
import { IBook } from './book.interface';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Types } from 'mongoose';

export const createBook = async (bookData: IBook): Promise<IBook> => {
  const book = await Book.create(bookData);
  return book;
};

export const getAllBooks = async (): Promise<IBook[]> => {
  return Book.find();
};

export const getBookById = async (id: string): Promise<IBook | null> => {
  return Book.findById(id);
};

export const updateBook = async (
  id: string,
  data: Partial<IBook>
): Promise<IBook | null> => {
  return Book.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBook = async (id: string): Promise<IBook | null> => {
  return Book.findByIdAndDelete(id);
};
