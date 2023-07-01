import express from 'express';
import {
  createAdminController,
  createFacultyController,
  createStudentController,
} from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  createAdminZodSchema,
  createFacultyZodSchema,
  createUserZodSchema,
} from './user.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createUserZodSchema),
  createStudentController
);

router.post(
  '/create-faculty',
  validateRequest(createFacultyZodSchema),
  createFacultyController
);

router.post(
  '/create-admin',
  validateRequest(createAdminZodSchema),
  createAdminController
);
export const userRoutes = router;
