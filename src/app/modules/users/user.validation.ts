import { z } from 'zod';
import { bloodGroup, gender } from '../Student/student.constant';

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
      gender: z.enum([...gender] as [string, ...string[]], {
        required_error: 'Gender is required',
      }),
      bloodGroup: z
        .enum([...bloodGroup] as [string, ...string[]], {
          required_error: 'Blood group is required',
        })
        .optional(),
      email: z.string({ required_error: 'Email is required' }).email(),
      contactNo: z.string({ required_error: 'contact no is required' }),
      emergencyContactNo: z.string({
        required_error: 'Emergency contact required',
      }),
      permanentAddress: z.string({
        required_error: 'present address is required',
      }),
      guardian: z.object({
        fatherName: z.string({ required_error: 'father name is requried' }),
        fatherOccupation: z.string({
          required_error: 'father occupation is requried',
        }),
        fatherContactNo: z.string({
          required_error: 'father contact no is requried',
        }),
        motherName: z.string({ required_error: 'mother name is requried' }),
        motherOccupation: z.string({
          required_error: 'mother occupation is requried',
        }),
        motherContactNo: z.string({
          required_error: 'mother contact no is requried',
        }),
        address: z.string({ required_error: 'address is requried' }),
      }),
      localGuardian: z.object({
        name: z.string({ required_error: 'local guardian name is required' }),
        occupation: z.string({
          required_error: 'local guardian occupation is required',
        }),
        contactNo: z.string({
          required_error: 'local guardian contact no is required',
        }),
        address: z.string({
          required_error: 'local guardian address is required',
        }),
      }),
      profileImage: z.string().optional(),
    }),
  }),
});
