import { z } from 'zod';

export const createUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: z.object({
        firstName: z.string({ required_error: 'first name is required' }),
        middleName: z.string({}).optional(),
        lastName: z.string({ required_error: 'first name is required' }),
      }),
      dateOfBirth: z.string({ required_error: 'Date of Birth is required' }),
      gender: z.enum(['male', 'female'], {
        required_error: 'Gender is required',
      }),
      bloodGroup: z.enum(['A+', 'A-', 'O+', 'O-', 'AB+', 'AB-', 'B+', 'B-'], {
        required_error: 'Blood group is required',
      }),
      email: z.string({ required_error: 'Email is required' }),
      contactNo: z.string({ required_error: 'contact no is required' }),
    }),
  }),
});

// await createUserZodSchema.parseAsync(req)
