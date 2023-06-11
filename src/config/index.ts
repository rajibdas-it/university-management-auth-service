import dotenv from 'dotenv'
import path from 'path'

// eslint-disable-next-line no-undef
dotenv.config({ path: path.join(process.cwd(), '.env') })

// eslint-disable-next-line no-undef
export const env = process.env.NODE_ENV

// eslint-disable-next-line no-undef
export const port = Number(process.env.PORT) as number
// eslint-disable-next-line no-undef
export const database_url = process.env.DATABASE_URL
// eslint-disable-next-line no-undef
export const default_password = process.env.DEFAULT_PASSWORD
