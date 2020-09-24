import logger from '../utils/logger';
import BadRequestError from '../utils/BadRequestError';
import {
  checkIfExists,
  add,
  update,
  remove,
  getByMealType as getLog,
  getById
} from '../models/UserLogs';

/**
 * fetch food log by id
 *
 * @param {integer} id
 */
export async function getFoodLogById(id) {
  logger.info(`Fetching log with id ${id}`);

  const data = await getById(id);
  if (!data) {
    throw new BadRequestError(`Food with id ${id} does not exits in log`);
  }

  return {
    data: data,
    message: `Food with id ${id}`
  };
}

/**
 * Get food by meal type for a particular day
 *
 * @param {integer} userId
 * @param {string} date
 * @param {1} mealType
 */
export async function getByMealType(userId, date, mealType) {
  logger.info(`Fetching foods for ${userId}, ${date} , mealTypeId:${mealType}`);

  if (!date) {
    logger.error('/date/ is required');
    throw new BadRequestError('/date/ is required');
  }
  if (!mealType) {
    logger.error('/mealType/ is required');
    throw new BadRequestError('/mealType/ is required');
  }

  const data = await getLog(userId, date, mealType);
  return {
    data,
    message: `Food log for date ${date}`
  };
}

/**
 * Add food to log
 *
 * @param {*} payload
 */
export async function addLog(payload, userId) {
  logger.info(`checking if ${payload}}already added`);

  const existingData = await checkIfExists(payload.foodId, payload.loggedDate, payload.mealType);

  if (existingData) {
    throw new BadRequestError(`Food already added try updating added food`);
  }

  logger.info(`adding a food log`);
  payload.userId = userId;

  const data = await add(payload);
  return {
    data,
    message: 'food added to log'
  };
}

/**
 * Remove food from log
 *
 * @param {integer} id
 */
export async function removeFood(id) {
  logger.info(`checking if food exists in log`);
  const data = await getById(id);

  if (!data) {
    throw new BadRequestError(`Food with id ${id} does not exits in log`);
  }

  logger.info(`removing a food from log`);

  await remove(id);
  return {
    message: 'food removed from log'
  };
}

/**
 * Update existing food
 *
 * @param {*} payload
 * @param {integer} id
 */
export async function updateLog(payload, id, userId) {
  logger.info(`adding a food log for ${userId}`);

  const data = await update(payload, id);
  return {
    data,
    message: 'food added to log'
  };
}
