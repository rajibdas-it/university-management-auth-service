import {
  academicSemesterCode,
  academicSemesterMonths,
  academicSemesterTitle,
} from './academicSemester.constant';
import { AcademicModel, IAcademicSemester } from './academicSemester.interface';
import { Schema, model } from 'mongoose';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: academicSemesterTitle },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: academicSemesterCode },
    startMonth: { type: String, required: true, enum: academicSemesterMonths },
    endMonth: { type: String, required: true, enum: academicSemesterMonths },
  },
  { timestamps: true }
);

const academicSemester = model<IAcademicSemester, AcademicModel>(
  'academicSemester',
  academicSemesterSchema
);
export default academicSemester;
