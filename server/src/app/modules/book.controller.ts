// import { Request, Response } from 'express';
// import * as BookService from './book.service';

// export const createBook = async (req: Request, res: Response) => {
//   const result = await BookService.createBook(req.body);
//   res.status(201).json({ success: true, data: result });
// };

// export const getBooks = async (req: Request, res: Response) => {
//   const books = await BookService.getAllBooks();
//   res.status(200).json({ success: true, data: books });
// };

// export const getSingleBook = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const { id } = req.params;
//   const book = await BookService.getBookById(id);
//   if (!book) {
//     return res.status(404).json({ success: false, message: 'Book not found' });
//   }
//   return res.status(200).json({ success: true, data: book });
// };

// export const updateBook = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const { id } = req.params;
//   const updated = await BookService.updateBook(id, req.body);
//   if (!updated) {
//     return res.status(404).json({ success: false, message: 'Book not found' });
//   }
//   return res.status(200).json({ success: true, data: updated });
// };

// export const deleteBook = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const { id } = req.params;
//   const deleted = await BookService.deleteBook(id);
//   if (!deleted) {
//     return res.status(404).json({ success: false, message: 'Book not found' });
//   }
//   return res
//     .status(200)
//     .json({ success: true, message: 'Book deleted successfully' });
// };

import { Request, Response, NextFunction } from 'express';
import * as BookService from './book.service';

// ক্রেট বই
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await BookService.createBook(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

// সব বই পাওয়া
export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await BookService.getAllBooks();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    next(error);
  }
};

// একটি বই পাওয়া
// export const getSingleBook = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id } = req.params;
//     const book = await BookService.getBookById(id);
//     if (!book) {
//       return res.status(404).json({ success: false, message: 'Book not found' });
//     }
//     return res.status(200).json({ success: true, data: book });
//   } catch (error) {
//     next(error);
//   }
// };

// বই আপডেট
// export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id } = req.params;
//     const updated = await BookService.updateBook(id, req.body);
//     if (!updated) {
//       return res.status(404).json({ success: false, message: 'Book not found' });
//     }
//     return res.status(200).json({ success: true, data: updated });
//   } catch (error) {
//     next(error);
//   }
// };

// বই ডিলিট
// export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id } = req.params;
//     const deleted = await BookService.deleteBook(id);
//     if (!deleted) {
//       return res.status(404).json({ success: false, message: 'Book not found' });
//     }
//     return res.status(200).json({ success: true, message: 'Book deleted successfully' });
//   } catch (error) {
//     next(error);
//   }
// };

// book.controller.ts
export const getSingleBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await BookService.getBookById(id);
  if (!book) {
    res.status(404).json({ success: false, message: 'Book not found' });
    return;
  }
  res.status(200).json({ success: true, data: book });
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updated = await BookService.updateBook(id, req.body);

    if (!updated) {
      res.status(404).json({
        success: false,
        message: 'Book not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await BookService.deleteBook(id);
  if (!deleted) {
    res.status(404).json({ success: false, message: 'Book not found' });
    return;
  }
  res.status(200).json({ success: true, message: 'Book deleted successfully' });
};
