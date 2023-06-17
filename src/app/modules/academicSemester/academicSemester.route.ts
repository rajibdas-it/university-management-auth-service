import express from 'express';
import {
  createSemesterController,
  getAllSemesterController,
} from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import createAcademicSemesterZodSchema from './academicSemester.validate';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(createAcademicSemesterZodSchema),
  createSemesterController
);
router.get('/', getAllSemesterController);

export const semesterRoutes = router;
