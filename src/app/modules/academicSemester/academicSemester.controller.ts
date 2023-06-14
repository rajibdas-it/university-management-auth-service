import { RequestHandler } from 'express';
import { createSemesterServices } from './academicSemester.services';

export const createSemesterController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { ...academicSemesterData } = req.body;
    // console.log(req.body);

    const result = await createSemesterServices(academicSemesterData);
    res.send(200).json({
      success: true,
      data: result,
      message: 'Academic semester is created successfully',
    });
  } catch (error) {
    next(error);
  }
};
