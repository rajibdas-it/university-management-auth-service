import { createLogger, format, transports } from 'winston'
import path from 'path'
const { combine, timestamp, label, printf, prettyPrint } = format

import DailyRotateFile from 'winston-daily-rotate-file'

//custom log format

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  // const currentDate = date.toDateString()
  const hour = date.getHours()
  const mins = date.getMinutes()
  const secs = date.getSeconds()

  return `${date.toDateString()} ${hour}:${mins}:${secs} [${label}] ${level}: ${message}`
})

export const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat, prettyPrint()),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        // eslint-disable-next-line no-undef
        process.cwd(),
        'logs',
        'winston',
        'succeses',
        'phu-%DATE%-success.log'
      ),
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export const errorlogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat, prettyPrint()),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        // eslint-disable-next-line no-undef
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'phu-%DATE%-error.log'
      ),
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})
