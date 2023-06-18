import express from 'express';
import { createStudentController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createUserZodSchema } from './user.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createUserZodSchema),
  createStudentController
);
export const userRoutes = router;
