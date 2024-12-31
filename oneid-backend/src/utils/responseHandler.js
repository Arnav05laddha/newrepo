export class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function sendSuccess(res, data, message = 'Success') {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
}

export function sendError(res, error) {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal server error';

  return res.status(statusCode).json({
    success: false,
    message,
    error: env.NODE_ENV === 'development' ? error.stack : undefined,
  });
}