import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IStudent } from './student.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { studentFilterableField } from './student.constant';
import {
  deleteStudentServices,
  getAllStudentService,
  getSingleStudentService,
  updateStudentServices,
} from './student.services';

export const getAllStudentController = catchAsync(
  async (req: Request, res: Response) => {
    const filter = pick(req.query, studentFilterableField);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await getAllStudentService(filter, paginationOptions);

    sendResponse<IStudent[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students retrived successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

export const getSingleStudentController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await getSingleStudentService(id);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrive successfully',
      data: result,
    });
  }
);

export const updateStudentController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await updateStudentServices(id, updatedData);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Semester updated successfully',
      data: result,
    });
  }
);

export const deleteStudentController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await deleteStudentServices(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Semester deleted successfully',
    data: result,
  });
});
