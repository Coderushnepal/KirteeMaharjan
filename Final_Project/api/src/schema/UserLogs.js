import joi from 'joi';

const ADD_FOOD_SCHEMA = joi
  .object()
  .keys({
    foodId: joi.number().min(0),
    mealId: joi.number().min(0),
    servings: joi.number().min(1),
    measurement: joi.string().required(),
    grams: joi.number().required(),
    mealType: joi.number(),
    loggedDate: joi.string().required()
  })
  .or('foodId', 'mealId')
  .required();

const UPDATE_FOOD_SCHEMA = joi
  .object()
  .keys({
    servings: joi.number().min(1),
    measurement: joi.string().required(),
    grams: joi.number().required(),
    loggedDate: joi.string().required()
  })
  .required();

export const validateAddFoodToLog = (req, res, next) => {
  try {
    joi.assert(req.body, ADD_FOOD_SCHEMA);
    console.log('true');
    next();
  } catch (err) {
    next(err);
  }
};

export const validateUpdateFoodToLog = (req, res, next) => {
  try {
    joi.assert(req.body, UPDATE_FOOD_SCHEMA);
    console.log('true');
    next();
  } catch (err) {
    next(err);
  }
};
