import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const env = process.env.NODE_ENV;
export const port = Number(process.env.PORT) as number;
export const database_url = process.env.DATABASE_URL;
export const default_student_password = process.env.DEFAULT_STUDENT_PASSWORD;
export const default_faculty_password = process.env.DEFAULT_FACULTY_PASSWORD;
export const default_admin_password = process.env.DEFAULT_ADMIN_PASSWORD;
