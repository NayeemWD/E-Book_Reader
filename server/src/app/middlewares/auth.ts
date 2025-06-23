// // import { Request, Response, NextFunction } from 'express';
// // import jwt from 'jsonwebtoken';

// // const secret = process.env.JWT_SECRET || 'your_jwt_secret';

// // export const authMiddleware = (
// //   req: Request,
// //   res: Response,
// //   next: NextFunction
// // ) => {
// //   const token = req.headers.authorization?.split(' ')[1];
// //   if (!token) return res.status(401).json({ message: 'Unauthorized' });

// //   try {
// //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //     const decoded = jwt.verify(token, secret) as any;
// //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //     (req as any).user = decoded;
// //     next();
// //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
// //   } catch (err) {
// //     res.status(403).json({ message: 'Forbidden' });
// //   }
// // };

// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// const secret = process.env.JWT_SECRET || 'your_jwt_secret';

// export const authMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     res.status(401).json({ message: 'Unauthorized' });
//     return;
//   }

//   try {
//     const decoded = jwt.verify(token, secret) as { id: string; role: string };
//     req.user = decoded; // req-কে extend করতে হবে (নিচে দেখুন)
//     next();
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (err) {
//     res.status(403).json({ message: 'Forbidden' });
//   }
// };
