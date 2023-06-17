import express from 'express';
import {
  createSemesterController,
  getAllSemesterController,
  getSingleSemesterController,
  updateSemesterController,
} from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import createAcademicSemesterZodSchema from './academicSemester.validate';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(createAcademicSemesterZodSchema),
  createSemesterController
);

router.get('/:id', getSingleSemesterController);
router.patch('/:id', updateSemesterController);

router.get('/', getAllSemesterController);

export const semesterRoutes = router;
