import express from 'express';
import { createSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import createAcademicSemesterZodSchema from './academicSemester.validate';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(createAcademicSemesterZodSchema),
  createSemesterController
);

export const semesterRoutes = router;
