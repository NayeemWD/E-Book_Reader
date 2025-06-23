// export default validateRequest;
import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

const validateRequest = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse({ body: req.body });
      next();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: 'Validation Error',
        error: error.errors,
      });
    }
  };
};

export default validateRequest;
