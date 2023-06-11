import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { userRoutes } from './app/modules/users/user.route';
import { semesterRoutes } from './app/modules/academicSemester/academicSemester.route';

//import ApiError from './errors/ApiErrors'

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// basic routing
app.use('/api/v1/user/', userRoutes);
app.use('/api/v1/semester', semesterRoutes);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing')
// })

//global error handler
app.use(globalErrorHandler);

export default app;
