import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const port = Number(process.env.PORT) as number;
export const database_url = process.env.DATABASE_URL;
