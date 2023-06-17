import { NextFunction, Request, Response } from 'express';
import {
  createSemesterServices,
  deleteSemesterServices,
  getAllSemestersServices,
  getSingleSemesterServices,
  updateAcademicSemesterServices,
} from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicSemesterFilterableField } from './academicSemester.constant';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';
import academicSemester from './academicSemester.model';
import { string } from 'zod';

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
  }
);

export const getAllSemesterController = catchAsync(
  async (req: Request, res: Response) => {
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
  }
);

export const getSingleSemesterController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await getSingleSemesterServices(id);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrive successfully',
      data: result,
    });
  }
);

export const updateSemesterController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await updateAcademicSemesterServices(id, updatedData);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Semester updated successfully',
      data: result,
    });
  }
);

export const deleteSemesterController = catchAsync(async (req, res) => {
  const id = req.query.id;
  const result = await deleteSemesterServices(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Semester deleted successfully',
    data: result,
  });
});
