import { default_password } from '../../../config'
import ApiError from '../../../errors/ApiErrors'
import { IUsers } from './user.interface'
import User from './user.model'
import { generateUserID } from './user.utilz'

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
    throw new ApiError(400, 'Failed to create user')
  }
  return createdUser
}
