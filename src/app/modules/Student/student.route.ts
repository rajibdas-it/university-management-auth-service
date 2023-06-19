import express from 'express';
import {
  deleteStudentController,
  getAllStudentController,
  getSingleStudentController,
  updateStudentController,
  //   getSingleStudentController,
} from './student.controller';
import { updateStudentZodSchema } from './student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', getAllStudentController);
router.get('/:id', getSingleStudentController);
router.delete('/:id', deleteStudentController);
// router.patch('/:id', updateStudentController);

router.patch(
  '/:id',
  validateRequest(updateStudentZodSchema),
  updateStudentController
);

export const studentRoute = router;
