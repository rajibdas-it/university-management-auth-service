import { RequestHandler } from 'express'
import { createUserService } from './user.services'

export const createUserController: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body

    const result = await createUserService(user)
    res.status(200).json({
      success: true,
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
