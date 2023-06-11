import { AcademicModel, IAcademicSemester } from './academicSemester.interface';
import { Schema, model } from 'mongoose';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    code: { type: String, required: true },
    startMonth: { type: String, required: true },
    endMonth: { type: String, required: true },
  },
  { timestamps: true }
);

const academicSemester = model<IAcademicSemester, AcademicModel>(
  'academicSemester',
  academicSemesterSchema
);
export default academicSemester;
