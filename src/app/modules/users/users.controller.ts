import { NextFunction, Request, Response } from 'express'
import { createUserService } from './users.services'

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
