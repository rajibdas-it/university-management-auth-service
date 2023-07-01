import httpStatus from 'http-status';
import {
  default_admin_password,
  default_faculty_password,
  default_student_password,
} from '../../../config';
import ApiError from '../../../errors/ApiErrors';
import { IStudent } from '../Student/student.interface';
import AcademicSemester from '../academicSemester/academicSemester.model';
import { IUsers } from './user.interface';
import User from './user.model';
import {
  generateAdminId,
  generateFacultyId,
  generateStudentId,
} from './user.utilz';
import mongoose from 'mongoose';
import Student from '../Student/student.model';
import { Faculty } from '../faculty/faculty.model';
import { IFaculty } from '../faculty/faculty.interface';
import { IAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';

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
    // console.log('from user service page', id);
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

    // console.log(newUser);
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

export const createFaculty = async (
  faculty: IFaculty,
  user: IUsers
): Promise<IUsers | null> => {
  // default password
  if (!user.password) {
    user.password = default_faculty_password as string;
  }
  // set role
  user.role = 'faculty';

  // generate faculty id
  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const id = await generateFacultyId();
    user.id = id;
    faculty.id = id;

    const newFaculty = await Faculty.create([faculty], { session });

    if (!newFaculty.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create faculty ');
    }

    user.faculty = newFaculty[0]._id;

    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
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
      path: 'faculty',
      populate: [
        {
          path: 'academicDepartment',
        },
        {
          path: 'academicFaculty',
        },
      ],
    });
  }

  return newUserAllData;
};
export const createAdmin = async (
  admin: IAdmin,
  user: IUsers
): Promise<IUsers | null> => {
  // If password is not given,set default password
  if (!user.password) {
    user.password = default_admin_password as string;
  }
  // set role
  user.role = 'admin';

  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // generate admin id
    const id = await generateAdminId();
    user.id = id;
    admin.id = id;

    const newAdmin = await Admin.create([admin], { session });

    if (!newAdmin.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create faculty ');
    }

    user.admin = newAdmin[0]._id;

    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create admin');
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
      path: 'admin',
      populate: [
        {
          path: 'managementDepartment',
        },
      ],
    });
  }

  return newUserAllData;
};
