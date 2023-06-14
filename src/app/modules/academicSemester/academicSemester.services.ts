import { IAcademicSemester } from './academicSemester.interface';
import academicSemester from './academicSemester.model';

export const createSemesterServices = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await academicSemester.create(payload);
  return result;
};
