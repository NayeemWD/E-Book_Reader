import { z } from 'zod';

export const createBookZodSchema = z.object({
  body: z.object({
    title: z.string(),
    author: z.string(),
    category: z.string(),
    coverImage: z.string().optional(),
    pdfUrl: z.string().optional(),
    createdBy: z.string(),
  }),
});

// Optional: update schema if needed
export const updateBookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    coverImage: z.string().optional(),
    pdfUrl: z.string().optional(),
    createdBy: z.string().optional(),
  }),
});
