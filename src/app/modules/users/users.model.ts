import { Model, Schema, model } from 'mongoose'
import { IUsers } from './users.interface'

type UserModel = Model<IUsers, object>

const userSchema = new Schema<IUsers, UserModel>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

const User = model<IUsers, UserModel>('User', userSchema)

export default User
