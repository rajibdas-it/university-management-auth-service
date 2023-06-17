import { NextFunction, Request, Response } from 'express';
import { createUserService } from './user.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

export const createUserController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...user } = req.body;
    const result = await createUserService(user);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'user created successfully',
      data: result,
    });
    next();
  }
);
