import { ErrorRequestHandler } from 'express';
import { env } from '../../config';
import { IGenericErrorMessage } from '../../interfaces/error';
import handleValidationError from '../../errors/handleValidationError';
import ApiError from '../../errors/ApiErrors';
import { errorlogger } from '../../shared/logger';
import { ZodError } from 'zod';
import handleZodErrorHandler from '../../errors/handleZodErrorHandler';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // eslint-disable-next-line no-unused-expressions
  env === 'development'
    ? // eslint-disable-next-line no-console
      console.log('😤Global Error handler', error)
    : errorlogger.error('GlobalErrorHandler', error);

  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodErrorHandler(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorMessages = simplifiedError?.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [{ path: '', message: error.message }]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: env !== 'production' ? error?.stack : undefined,
  });

  next();
};

export default globalErrorHandler;
