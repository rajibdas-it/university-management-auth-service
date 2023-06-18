import { Request, Response } from 'express';
import { createStudentService } from './user.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

export const createStudentController = catchAsync(
  async (req: Request, res: Response) => {
    const { student, ...userData } = req.body;

    const result = await createStudentService(student, userData);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'user created successfully',
      data: result,
    });
  }
);
