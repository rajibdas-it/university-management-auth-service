import { NextFunction, Request, Response } from 'express';
import {
  createSemesterServices,
  getAllSemestersServices,
} from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

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
    // const paginationOptions = {
    //   page: Number(req.query.page),
    //   limit: Number(req.query.limit),
    //   sortBy: req.query.sortBy,
    //   sortOrder: req.query.sortOrder,
    // };

    const paginationOptions = pick(req.query, paginationFields);
    console.log(paginationOptions);
    // const result = await getAllSemestersServices(paginationOptions);
    // sendResponse(res, {
    //   statusCode: 200,
    //   success: true,
    //   message: 'Semester retrived successfully',
    //   data: result,
    // });
    // next();
  }
);
