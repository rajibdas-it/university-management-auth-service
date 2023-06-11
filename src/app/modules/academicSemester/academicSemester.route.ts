import express from 'express';
import { createAcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import createAcademicSemesterZodSchema from './academicSemester.validate';

const router = express.Router();

router.get(
  '/create-semester',
  validateRequest(createAcademicSemesterZodSchema),
  createAcademicSemesterController
);

export const semesterRoutes = router;
