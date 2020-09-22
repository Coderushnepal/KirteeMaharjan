import joi from 'joi';
import url from 'url';

const CREATE_FOOD_SCHEMA = joi
  .array()
  .items(
    joi.object().keys({
      title: joi.string().min(0).required(),
      measurement: joi.string().min(0),
      grams: joi.number().min(0),
      calories: joi.number().required(),
      protein: joi.number().allow(null),
      fat: joi.number().allow(null),
      totalCarbs: joi.number().allow(null),
      fibre: joi.number().allow(null),
      saturatedFat: joi.number().allow(null)
    })
  )
  .required();

const SEARCH_FOOD_SCHEMA = joi
  .object()
  .keys({
    offset: joi.number().min(0).required(),
    limit: joi.number().min(0).max(25).required(),
    query: joi.string().min(0).required()
  })
  .required();

export function validateFoodCreation(req, res, next) {
  try {
    joi.assert(req.body, CREATE_FOOD_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}

export function validateFoodSearch(req, res, next) {
  const params = url.parse(req.url, true).query;
  console.log(params, req.url);
  try {
    joi.assert(params, SEARCH_FOOD_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}
