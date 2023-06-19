import express from 'express';
import { userRoutes } from '../modules/users/user.route';
import { semesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { studentRoute } from '../modules/Student/student.route';

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
  {
    path: '/students',
    route: studentRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
