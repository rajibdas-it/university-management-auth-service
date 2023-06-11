import { RequestHandler } from 'express';

export const createAcademicSemesterController: RequestHandler = (
  req,
  res,
  next
) => {
  try {
    res.send('route work fine');
  } catch (error) {
    next(error);
  }
};
