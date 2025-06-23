// import { Schema, model } from 'mongoose';

// export interface IUser {
//   name: string;
//   email: string;
//   password: string;
//   bookmarks: string[]; // Array of book IDs
// }

// const userSchema = new Schema<IUser>(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     bookmarks: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: 'Book',
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

// export const User = model<IUser>('User', userSchema);

// import { Schema, model } from 'mongoose';

// export interface IUser {
//   name: string;
//   email: string;
//   password: string;
//   role: 'user' | 'admin'; // ✅ role added
//   bookmarks: string[]; // Array of book IDs
// }

// const userSchema = new Schema<IUser>(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     role: {
//       type: String,
//       enum: ['user', 'admin'], // ✅ only two roles
//       default: 'user', // ✅ default role is user
//     },
//     bookmarks: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: 'Book',
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

// export const User = model<IUser>('User', userSchema);

import { Schema, model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin'; // ✅ এটা নতুন যোগ করো
  bookmarks: string[];
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>('User', userSchema);
