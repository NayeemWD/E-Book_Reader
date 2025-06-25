import { Request, Response, NextFunction } from 'express';
import * as BookService from './book.service';
import {
  extractDriveFileId,
  getImageViewLink,
  getPreviewLink,
} from '../../utils/googleDrive'; // ✅ path adjust করো
import { IBook } from './book.interface';

// ক্রেট বই
// export const createBook = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const result = await BookService.createBook(req.body);
//     res.status(201).json({ success: true, data: result });
//   } catch (error) {
//     next(error);
//   }
// };

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { title, author, category, pdfUrl, coverImage, createdBy } = req.body;

    const pdfFileId = extractDriveFileId(pdfUrl);
    const imageFileId = extractDriveFileId(coverImage);

    if (!pdfFileId || !imageFileId) {
      res
        .status(400)
        .json({ success: false, message: 'Invalid Google Drive link' });
      return; // ✅ Return দিলে Express বুঝবে, এই request শেষ
    }

    const bookData: IBook = {
      title,
      author,
      category,
      pdfUrl: getPreviewLink(pdfFileId),
      coverImage: getImageViewLink(imageFileId),
      createdBy,
    };

    const result = await BookService.createBook(bookData);

    // ✅ Proper return statement
    return res.status(201).json({ success: true, data: result });
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
