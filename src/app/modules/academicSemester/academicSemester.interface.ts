import { Model } from 'mongoose';

export type IAcademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemesterTitle = 'Autumn' | 'Summer' | 'Fall';
export type ISemesterCode = '01' | '02' | '03';

export type IAcademicSemester = {
  title: IAcademicSemesterTitle;
  year: string;
  code: ISemesterCode;
  startMonth: IAcademicSemesterMonths;
  endMonth: IAcademicSemesterMonths;
};

export type AcademicModel = Model<IAcademicSemester, Record<string, unknown>>;

export type IAcademicSemesterFilter = { searchTerm: string };
