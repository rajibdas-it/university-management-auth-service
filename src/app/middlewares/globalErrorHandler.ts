import { Request, Response, NextFunction } from 'express'
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next()
}
