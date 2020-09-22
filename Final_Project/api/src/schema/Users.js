import joi from 'joi';

const CREATE_USER_SCHEMA = joi
  .object()
  .keys({
    email: joi.string().max(100).min(0).required(),
    username: joi.string().max(100).email().required(),
    password: joi.string().max(100).min(8).required()
  })
  .min(0);

export const validateUserCreation = (req, res, next) => {
  try {
    joi.assert(res.body, CREATE_USER_SCHEMA);
    console.log('true');
    next();
  } catch (err) {
    next(err);
  }
};

const VALIDATE_LOGIN_SCHEMA = joi
  .object()
  .keys({
    email: joi.string().max(100).email().required(),
    password: joi.string().max(100).required()
  })
  .required();

export function validateUserLogin(req, res, next) {
  console.log('validating');
  try {
    joi.assert(req.body, VALIDATE_LOGIN_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}
