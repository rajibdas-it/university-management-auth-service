import { NextFunction, Request, Response } from 'express';
import { createSemesterServices } from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

export const createSemesterController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    // console.log(req.body);

    const result = await createSemesterServices(academicSemesterData);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'academic semester created successfully',
      data: result,
    });
    next();
  }
);
