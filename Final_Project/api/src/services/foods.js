import logger from '../utils/logger';

import NotFoundError from '../utils/NotFoundError';
import { addMultipleFoods, search, getById } from '../models/Foods';

/**
 * Add food to database
 *
 * @param {array} payload
 */
export async function createFood(payload) {
  logger.info('adding foods to the database');
  await addMultipleFoods(payload);
  return {
    data: payload,
    message: 'foods added successfully'
  };
}

/**
 * Get specific food by using id
 *
 * @param {integer} id
 */
export async function getFoodById(id) {
  logger.info(`Getting food with id ${id}`);
  const data = await getById(id);

  if (!data) {
    logger.info(`Food with id ${id} not found`);
    throw new NotFoundError(`Food with ${id} doesnot exists`);
  }

  return {
    data,
    message: `Food with id ${id}`
  };
}

/**
 * Search for foods given a quwery string
 *
 * @param {*} params
 */

export async function searchFood(params) {
  const { offset, limit, query } = params;
  console.log(offset, limit, query);

  logger.info('searching for food');
  let data = await search(offset, limit, query);
  const values = Object.values(data);
  console.log(data, values);

  return {
    data: values.length ? values : null,
    message: `Search result against query ${query}`
  };
}
