import { default_password } from '../../../config'
import { IUsers } from './users.interface'
import User from './users.model'
import { generateUserID } from './users.utilz'

export const createUserService = async (
  user: IUsers
): Promise<IUsers | null> => {
  const id = await generateUserID()
  user.id = id
  if (!user.password) {
    user.password = default_password as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user')
  }
  return createdUser
}
