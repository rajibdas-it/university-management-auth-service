import { Request, Response } from 'express'
import { createUserService } from './users.services'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { user } = req.body

    const result = await createUserService(user)
    res.status(200).json({
      success: true,
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create new user',
    })
  }
}
