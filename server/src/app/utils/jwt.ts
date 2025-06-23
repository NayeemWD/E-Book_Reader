import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your_jwt_secret';
const expiresIn = '7d';

export const signToken = (payload: object): string => {
  return jwt.sign(payload, secret, { expiresIn });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verifyToken = (token: string): any => {
  return jwt.verify(token, secret);
};
