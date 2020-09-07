import joi from 'joi';

const CREATE_USER_SCHEMA = joi.object().keys({
  email: joi.string().max(100).min(0).required(),
  password: joi.string().max(100).min(0).required(),
  firstName: joi.string().max(50).min(0).required(),
  lastName: joi.string().max(50).min(0).required()
});

export function validateUserCreation(req, res, next) {
  try {
    joi.assert(req.body, CREATE_USER_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}
