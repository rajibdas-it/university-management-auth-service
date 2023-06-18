import httpStatus from 'http-status';
import { default_student_password } from '../../../config';
import ApiError from '../../../errors/ApiErrors';
import { IStudent } from '../Student/student.interface';
import AcademicSemester from '../academicSemester/academicSemester.model';
import { IUsers } from './user.interface';
import User from './user.model';
import { generateStudentId } from './user.utilz';
import mongoose from 'mongoose';
import Student from '../Student/student.model';

// step: create student -> create user(student id ref hisabe thakbe)

export const createStudentService = async (
  student: IStudent,
  user: IUsers
): Promise<IUsers | null> => {
  // set default password (if admin not send)
  if (!user.password) {
    user.password = default_student_password as string;
  }

  // set role
  user.role = 'student';

  //get academic semester for generate student customize id
  const academicSemester = await AcademicSemester.findById(
    student.academicSemester
  );
  let newUserAllData = null;
  // transaction and rollback system for write query in multiple table at same time
  const session = await mongoose.startSession(); //mongodb session (built in func)
  try {
    session.startTransaction();
    const id = await generateStudentId(academicSemester);
    console.log(id);
    user.id = id;
    student.id = id;

    const newStudent = await Student.create([student], { session }); //session use korar jonno ei vabe data save korte hobe
    if (!newStudent.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }
    //set _id into user
    user.student = newStudent[0]._id;
    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create new user');
    }
    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'student',
      populate: [
        { path: 'academicSemester' },
        { path: 'academicDepartment' },
        { path: 'academicFaculty' },
      ],
    });
  }

  return newUserAllData;
};
