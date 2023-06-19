import { Schema, model } from 'mongoose';
import { IUsers, UserModel } from './user.interface';

const userSchema = new Schema<IUsers>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    // faculty?: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Faculty',
    // },
    // admin?: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Admin',
    // },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model<IUsers, UserModel>('User', userSchema);

export default User;
