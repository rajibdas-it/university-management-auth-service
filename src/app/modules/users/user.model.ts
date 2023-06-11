import { Schema, model } from 'mongoose'
import { IUsers, UserModel } from './user.interface'

const userSchema = new Schema<IUsers>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

const User = model<IUsers, UserModel>('User', userSchema)

export default User