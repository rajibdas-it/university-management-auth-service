import ApiError from '../../../errors/ApiErrors';
import {
  academicSemesterCode,
  academicSemesterMonths,
  academicSemesterTitle,
} from './academicSemester.constant';
import { AcademicModel, IAcademicSemester } from './academicSemester.interface';
import { Schema, model } from 'mongoose';
import httpStatus from 'http-status';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: academicSemesterTitle },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: academicSemesterCode },
    startMonth: { type: String, required: true, enum: academicSemesterMonths },
    endMonth: { type: String, required: true, enum: academicSemesterMonths },
  },
  { timestamps: true }
);

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await academicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic semester is already exist'
    );
  }
  next();
});

const academicSemester = model<IAcademicSemester, AcademicModel>(
  'academicSemester',
  academicSemesterSchema
);
export default academicSemester;
