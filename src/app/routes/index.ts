import express from 'express';
import { userRoutes } from '../modules/users/user.route';
import { semesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/semester',
    route: semesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
];
// router.use('/user', userRoutes);
// router.use('/semester', semesterRoutes);

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
