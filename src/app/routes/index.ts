import express from 'express';
import { userRoutes } from '../modules/users/user.route';
import { semesterRoutes } from '../modules/academicSemester/academicSemester.route';

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
];
// router.use('/user', userRoutes);
// router.use('/semester', semesterRoutes);

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
