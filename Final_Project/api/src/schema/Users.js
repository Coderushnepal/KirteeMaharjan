import joi from 'joi';

const CREATE_USER_SCHEMA = joi
  .object()
  .keys({
    email: joi.string().max(100).min(0).required(),
    username: joi.string().max(100).email().required(),
    password: joi.string().max(100).min(8).required()
  })
  .min(0);

const VALIDATE_LOGIN_SCHEMA = joi
  .object()
  .keys({
    email: joi.string().max(100).email().required(),
    password: joi.string().max(100).required()
  })
  .required();

const CREATE_USER_GOALS = joi
  .object()
  .keys({
    calories: joi.number().min(0).required(),
    fat: joi.number().min(0).required(),
    protein: joi.number().min(0).required(),
    carbs: joi.number().min(0).required()
  })
  .required();

const UPDATE_USER_GOALS = joi
  .object()
  .keys({
    calories: joi.number().min(0),
    fat: joi.number().min(0),
    protein: joi.number().min(0),
    carbs: joi.number().min(0)
  })
  .min(1);

export const validateUserCreation = (req, res, next) => {
  try {
    joi.assert(res.body, CREATE_USER_SCHEMA);
    console.log('true');
    next();
  } catch (err) {
    next(err);
  }
};

export function validateUserLogin(req, res, next) {
  console.log('validating');
  try {
    joi.assert(req.body, VALIDATE_LOGIN_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}

export const validateUserGoalCreation = (req, res, next) => {
  try {
    joi.assert(req.body, CREATE_USER_GOALS);
    next();
  } catch (err) {
    next(err);
  }
};
export const validateUserGoalUpdate = (req, res, next) => {
  try {
    joi.assert(req.body, UPDATE_USER_GOALS);
    next();
  } catch (err) {
    next(err);
  }
};
