import logger from '../utils/logger';

import NotFoundError from '../utils/NotFoundError';
import { addMultipleMeals, search, getById } from '../models/Meals';

/**
 * Add Meal to database
 *
 * @param {array} payload
 */
export async function createMeal(payload) {
  logger.info('adding Meal to the database');
  await addMultipleMeals(payload);
  return {
    data: payload,
    message: 'Meal added successfully'
  };
}

/**
 * Get specific Meal by using id
 *
 * @param {integer} id
 */
export async function getMealById(id) {
  logger.info(`Getting Meal with id ${id}`);
  const data = await getById(id);

  if (!data) {
    logger.info(`Meal with id ${id} not found`);
    throw new NotFoundError(`Meal with ${id} doesnot exists`);
  }

  return {
    data,
    message: `Meal with id ${id}`
  };
}

/**
 * Search for Meal given a quwery string
 *
 * @param {*} params
 */

export async function searchMeal(params) {
  const { offset, limit, query } = params;
  console.log(offset, limit, query);

  logger.info('searching for Meal');
  let data = await search(offset, limit, query);
  const values = Object.values(data);
  console.log(data, values);

  return {
    data: values.length ? values : null,
    message: `Search result against query ${query}`
  };
}
