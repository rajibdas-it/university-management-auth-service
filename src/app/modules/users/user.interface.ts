import { Model, Types } from 'mongoose';

export type IUsers = {
  id: string | undefined;
  role: string;
  password: string;
  student?: Types.ObjectId | IStudent;
  // faculty?: Types.ObjectId | IFaculty;
  // admin?: Types.ObjectId | IAdmin;
};

export type UserModel = Model<IUsers, Record<string, unknown>>;
