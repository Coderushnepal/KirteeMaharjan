import snakeize from 'snakeize';
import camelize from 'camelize';

import connection from '../db';
import { FETCH_LOGS_BY_MEAL_TYPE } from '../db/queries/FoodLogs';

const TABLE = 'user_logs';

/**
 * Check if food already added
 *
 * @param {integer} foodId
 * @param {string} loggedDate
 * @param {integer} mealType
 */
export async function checkIfExists(foodId, loggedDate, mealType) {
  const [result] = await connection
    .select('*')
    .from(TABLE)
    .where({ food_id: foodId, logged_date: loggedDate, meal_type: mealType });

  return result ? result : null;
}

/**
 * Get logged food by id
 *
 * @param {integer} id
 */
export async function getById(id) {
  const [data] = await connection.select('*').from(TABLE).where({ id });

  return data ? data : null;
}

/**
 *  Get logged foods by meal type and date
 *
 * @param {integer} userId
 * @param {string} date
 * @param {integer} mealType
 */
export async function getByMealType(userId, date, mealType) {
  console.log(userId, date, mealType);
  const query = FETCH_LOGS_BY_MEAL_TYPE(userId, date, mealType);
  const { rows } = await connection.raw(query, [userId, date, mealType]);
  return camelize(rows);
}

/**
 * Add food to database
 *
 * @param {*} payload
 */
export async function add(payload) {
  console.log(payload);
  const [restult] = await connection.insert(snakeize(payload)).into(TABLE).returning('*');
  return camelize(restult);
}

/**
 * Update a food log
 *
 * @param {object} payload
 * @param {integer} id
 */
export async function update(payload, id) {
  console.log(payload);
  const [result] = await connection(TABLE)
    .update(snakeize(payload))
    .where({ id })
    .returning(['id', 'food_id', 'servings', 'measurement', 'grams', 'logged_date']);
  return result;
}

/**
 * Remove log
 *
 * @param {integer} id
 */
export async function remove(id) {
  await connection(TABLE).del().where({ id });
}
