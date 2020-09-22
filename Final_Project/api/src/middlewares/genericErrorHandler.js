require('joi');
import HttpStatusCode from 'http-status-codes';

import NotFoundError from '../utils/NotFoundError';
import BadRequestError from '../utils/BadRequestError';
import UnauthoroziedError from '../utils/UnauthorizedError'; //UnauthoroziedError
import logger from '../utils/logger';

export default function genericErrorHandler(err, req, res, next) {
  logger.error(err);

  if (err.isJoi) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      code: HttpStatusCode.BAD_REQUEST,
      err: err.name,
      message: err.details[0].message
    });
  }

  if (err instanceof NotFoundError) {
    return res.status(HttpStatusCode.NOT_FOUND).json({
      code: HttpStatusCode.NOT_FOUND,
      err: HttpStatusCode.getStatusText(HttpStatusCode.NOT_FOUND),
      message: err.message
    });
  }

  if (err instanceof UnauthoroziedError) {
    return res.status(HttpStatusCode.UNAUTHORIZED).json({
      code: HttpStatusCode.UNAUTHORIZED,
      err: HttpStatusCode.getStatusText(HttpStatusCode.UNAUTHORIZED),
      message: err.message
    });
  }

  if (err instanceof BadRequestError) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      code: HttpStatusCode.BAD_REQUEST,
      err: HttpStatusCode.getStatusText(HttpStatusCode.BAD_REQUEST),
      message: err.message
    });
  }

  let errMsg = err.message
    ? err.message
    : HttpStatusCode.getStatusText(HttpStatusCode.INTERNAL_SERVER_ERROR);

  if (err) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      err: HttpStatusCode.getStatusText(HttpStatusCode.INTERNAL_SERVER_ERROR),
      message: errMsg
    });
  }
}
