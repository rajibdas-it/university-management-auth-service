import { Schema, model } from 'mongoose';

import { IStudent, StudentModel } from './student.interface';
import { bloodGroup, gender } from './student.constant';

export const studentSchema = new Schema<IStudent, StudentModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: {
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String, required: true },
      },
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: gender,
    },
    bloodGroup: {
      type: String,
      enum: bloodGroup,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    guardian: {
      required: true,
      type: {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        fatherContactNo: { type: String, required: true },
        motherName: { type: String, required: true },
        motherOccupation: { type: String, required: true },
        motherContactNo: { type: String, required: true },
        address: { type: String, required: true },
      },
    },
    localGuardian: {
      required: true,
      type: {
        name: { type: String, required: true },
        occupation: { type: String, required: true },
        contactNo: { type: String, required: true },
        address: { type: String, required: true },
      },
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Student = model('Student', studentSchema);

export default Student;
