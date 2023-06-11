import { z } from 'zod';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Autumn', 'Summer', 'Fall'], {
      required_error: 'Title is required',
    }),
    year: z.number({
      required_error: 'year is required',
    }),
    code: z.enum(['01', '02', '03'], { required_error: 'code is required' }),
    startMonth: z.enum(
      [
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
      ],
      { required_error: 'Month name is required' }
    ),
    endMonth: z.enum(
      [
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
      ],
      { required_error: 'Month name is required' }
    ),
  }),
});

export default createAcademicSemesterZodSchema;
