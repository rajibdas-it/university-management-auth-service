import express from 'express';
import {
  createSemesterController,
  deleteSemesterController,
  getAllSemesterController,
  getSingleSemesterController,
  updateSemesterController,
} from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  updateAcademicSemesterZodSchema,
  createAcademicSemesterZodSchema,
} from './academicSemester.validate';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(createAcademicSemesterZodSchema),
  createSemesterController
);

router.get('/:id', getSingleSemesterController);
router.patch(
  '/:id',
  validateRequest(updateAcademicSemesterZodSchema),
  updateSemesterController
);
router.delete('/:id', deleteSemesterController);

router.get('/', getAllSemesterController);

export const semesterRoutes = router;
