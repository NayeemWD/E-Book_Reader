import { Schema, model } from 'mongoose';
import { IBook } from './book.interface';

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  coverImage: { type: String },
  pdfUrl: { type: String },
  createdBy: { type: String, required: true },
});

export const Book = model<IBook>('Book', bookSchema);
