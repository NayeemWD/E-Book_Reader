// import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
// import { User } from '../user/user.model';
// import { signToken } from '../../utils/jwt';

// export async function loginUser(req: Request, res: Response): Promise<void> {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       res.status(404).json({ message: 'User not found' });
//       return;
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       res.status(401).json({ message: 'Invalid password' });
//       return;
//     }

//     const token = signToken({ id: user._id, role: user.role });
//     res.status(200).json({ token, user });
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// }

// export const registerUser = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { email, password, name } = req.body;

//     // ভ্যালিডেশন চেক
//     if (!email || !password || !name) {
//       res
//         .status(400)
//         .json({ message: 'Email, password and name are required' });
//       return;
//     }

//     // ইমেইল ফরম্যাট চেক
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       res.status(400).json({ message: 'Invalid email format' });
//       return;
//     }

//     // পাসওয়ার্ড শক্তি চেক
//     if (password.length < 6) {
//       res
//         .status(400)
//         .json({ message: 'Password must be at least 6 characters' });
//       return;
//     }

//     // ইউজার অস্তিত্ব চেক
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       res.status(400).json({ message: 'User already exists' });
//       return;
//     }

//     // পাসওয়ার্ড হ্যাশ
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // নতুন ইউজার তৈরি
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//       name,
//       role: 'user',
//     });

//     // ডেটাবেসে সেভ
//     await newUser.save();

//     // টোকেন জেনারেট
//     const token = signToken({ id: newUser._id, role: newUser.role });

//     // রেসপন্স
//     res.status(201).json({
//       success: true,
//       token,
//       user: {
//         id: newUser._id,
//         email: newUser.email,
//         name: newUser.name,
//         role: newUser.role,
//       },
//     });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error during registration',
//     });
//   }
// };

//////////

// export const loginUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(404).json({ message: 'User not found' });

//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid)
//     return res.status(401).json({ message: 'Invalid password' });

//   const token = signToken({ id: user._id, role: user.role });
//   return res.status(200).json({ token, user });
// };

// export const registerUser = async (req: Request, res: Response) => {
//   const { email, password, name } = req.body;

//   // চেক করুন ইউজার ইতিমধ্যে আছে কিনা
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(400).json({ message: 'User already exists' });
//   }

//   // পাসওয়ার্ড হ্যাশ করুন
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // নতুন ইউজার তৈরি করুন
//   const newUser = new User({
//     email,
//     password: hashedPassword,
//     name,
//     role: 'user', // ডিফল্ট রোল
//   });

//   // ইউজার সেভ করুন
//   await newUser.save();

//   // টোকেন জেনারেট করুন
//   const token = signToken({ id: newUser._id, role: newUser.role });

//   // রেসপন্স পাঠান
//   res.status(201).json({ token, user: newUser });
// };

///////////
// controllers/auth.controller.ts

//////////

// import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
// import { User } from '../user/user.model';

// export const registerUser = async (req: Request, res: Response) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role: 'user',
//     });

//     await newUser.save();

//     res.status(201).json({
//       message: 'User registered successfully',
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//         role: newUser.role,
//       },
//     });
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (err) {
//     res.status(500).json({ message: 'Server error during registration' });
//   }
// };

// export const loginUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     res.status(200).json({
//       message: 'Login successful',
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (err) {
//     res.status(500).json({ message: 'Server error during login' });
//   }
// };

////////

import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../user/user.model';

// export const registerUser = async (req: Request, res: Response) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role: 'user',
//     });

//     await newUser.save();

//     res.status(201).json({
//       message: 'User registered successfully',
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//         role: newUser.role,
//       },
//     });
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (err) {
//     res.status(500).json({ message: 'Server error during registration' });
//   }
// };

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: 'user',
    });

    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    res.status(500).json({ message: 'Server error during registration' });
    // console.log(err);
  }
};

// export const loginUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     res.status(200).json({
//       message: 'Login successful',
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (err) {
//     res.status(500).json({ message: 'Server error during login' });
//   }
// };

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    res.status(500).json({ message: 'Server error during login' });
  }
};
