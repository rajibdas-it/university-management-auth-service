import { NextFunction, Request, Response } from 'express';
import {
  createSemesterServices,
  getAllSemestersServices,
} from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicSemesterFilterableField } from './academicSemester.constant';

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

export const getAllSemesterController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, academicSemesterFilterableField);
    const paginationOptions = pick(req.query, paginationFields);
    // console.log(paginationOptions);
    const result = await getAllSemestersServices(filters, paginationOptions);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Semester retrived successfully',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);
