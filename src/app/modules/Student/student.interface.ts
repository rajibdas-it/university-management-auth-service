import { InferSchemaType, Model } from "mongoose";
import { studentSchema } from "./student.model";

export type IStudent = InferSchemaType(typeof studentSchema)

export type StudentModel = Model<IStudent, Record<string,unknown>>
// export type IStudent = {
//   id: string;
//   name: {
//     type: {
//       fristName: { type: String; required: true };
//       middleName: { type: String };
//       lastName: { type: String; required: true };
//     };
//     required: true;
//   };
//   dateOfBirth: string;
//   gender: 'male' | 'female';
//   bloodGroup: {
//     type: String;
//     enum: ['A+', 'A-', 'O+', 'O-', 'AB+', 'AB-', 'B+', 'B-'];
//     required: true;
//   };
//   email: {
//     type: String;
//     unique: true;
//     required: true;
//   };
//   contactNo: {
//     type: string;
//     required: true;
//     unique: true;
//   };
//   emergencyContactNo: {
//     type: string;
//     required: true;
//   };
//   presentAddress: {
//     type: String;
//     required: true;
//   };
//   permanentAddress: {
//     type: String;
//     required: true;
//   };
//   guardian: {
//     required: true;
//     type: {
//       fatherName: { type: String; required: true };
//       fatherOccupation: { type: String; required: true };
//       fatherContactNo: { type: String; required: true };
//       motherName: { type: String; required: true };
//       motherOccupation: { type: String; required: true };
//       motherContactNo: { type: String; required: true };
//       address: { type: String; required: true };
//     };
//   };
//   localGuardian: {
//     required: true;
//     type: {
//       name: { type: String; required: true };
//       occupation: { type: String; required: true };
//       contactNo: { type: String; required: true };
//       address: { type: String; required: true };
//     };
//   };
//   academicSemester: {
//     type: Schema.Types.ObjectId;
//     ref: 'academicSemester';
//   };
//   academicDepartment: {
//     type: Schema.Types.ObjectId;
//     ref: 'AcademicDepartment';
//   };
//   academicFaculty: {
//     type: Schema.Types.ObjectId;
//     ref: 'AcademicFaculty';
//   };
// };
