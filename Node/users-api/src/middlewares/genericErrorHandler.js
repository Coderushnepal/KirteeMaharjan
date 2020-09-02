import Joi from "joi";
import HttpStatusCode from "http-status-codes";

import NotFoundError from "../utils/NotFoundError";
import BadRequestError from "../utils/BadRequestError";
import UnauthorizedError from "../utils/UnauthorizedError";

export default function genericErrorHandler(err, req, res, next) {
  if (err.isJoi) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      code: HttpStatusCode.BAD_REQUEST,
      error: err.name,
      message: err.details.map((detail) => detail.message),
    });
  }

  if (err instanceof NotFoundError) {
    res.status(HttpStatusCode.NOT_FOUND).json({
      code: HttpStatusCode.NOT_FOUND,
      message: err.message,
    });
  }

  if (err instanceof BadRequestError) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      code: HttpStatusCode.BAD_REQUEST,
      message: err.message,
    });
  }

  if (err instanceof UnauthorizedError) {
    res.status(HttpStatusCode.UNAUTHORIZED).json({
      code: HttpStatusCode.UNAUTHORIZED,
      message: err.message,
    });
  }

  let errorMsg = err.message
    ? err.message
    : HttpStatusCode.getStatusText(HttpStatusCode.INTERNAL_SERVER_ERROR);
  if (err) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: errorMsg,
    });
  }
}
