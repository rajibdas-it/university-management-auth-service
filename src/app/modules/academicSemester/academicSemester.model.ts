import { AcademicModel, IAcademicSemester } from './academicSemester.interface';
import { Schema, model } from 'mongoose';

const monthName: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: ['Autumn', 'Summer', 'Fall'] },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: ['01', '02', '03'] },
    startMonth: { type: String, required: true, enum: monthName },
    endMonth: { type: String, required: true, enum: monthName },
  },
  { timestamps: true }
);

const academicSemester = model<IAcademicSemester, AcademicModel>(
  'academicSemester',
  academicSemesterSchema
);
export default academicSemester;
