import { createLogger, format, transports } from 'winston'
import path from 'path'
const { combine, timestamp, label, printf, prettyPrint } = format

//custom log format

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const currentDate = date.toDateString()
  const hour = date.getHours()
  const mins = date.getMinutes()
  const secs = date.getSeconds()

  return `${currentDate} ${hour}:${mins}:${secs} [${label}] ${level}: ${message}`
})

export const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat, prettyPrint()),
  transports: [
    new transports.Console(),
    new transports.File({
      // eslint-disable-next-line no-undef
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})

export const errorlogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat, prettyPrint()),
  transports: [
    new transports.Console(),

    new transports.File({
      // eslint-disable-next-line no-undef
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})
