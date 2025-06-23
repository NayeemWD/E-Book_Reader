// // import { Request, Response, NextFunction } from 'express';

// // export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
// //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //   const user = (req as any).user;
// //   if (user?.role !== 'admin') {
// //     return res.status(403).json({ message: 'Admins only' });
// //   }
// //   next();
// // };

// import { Request, Response, NextFunction } from 'express';

// export const checkAdmin = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void => {
//   if (req.user?.role !== 'admin') {
//     res.status(403).json({ message: 'Forbidden' });
//     return; // শুধু return ব্যবহার করুন, return res.status() নয়
//   }
//   next();
// };
