import snakeize from 'snakeize';
import camelize from 'camelize';

import connection from '../db';
import logger from '../utils/logger';

const TABLE = 'foods';

/**
 * Add individual food to database
 *
 * @param {object} payload
 */
export async function addFood(payload) {
  const [result] = await connection.insert(snakeize(payload)).into(TABLE).returning('*');
  return camelize(result);
}

/**
 * Add multiple food to database
 *
 * @param {array} payload
 */
export async function addMultipleFoods(payload) {
  console.log(snakeize(payload));
  await connection.batchInsert(TABLE, snakeize(payload));
}

/**
 * Get food by id
 *
 * @param {integer} id
 */
export async function getById(id) {
  const data = await connection
    .select(
      'id',
      'title',
      'measurement',
      'grams',
      'calories',
      'protein',
      'total_carbs',
      'fat',
      'fibre',
      'saturated_fat'
    )
    .from(TABLE)
    .where({ id });

  logger.info('Result of getById : ', data['0']);
  return data ? data['0'] : null;
}

/**
 * Search food against query param
 *
 * @param {number} offset
 * @param {number} limit
 * @param {string} query
 */
export async function search(offset, limit, query) {
  console.log(query, offset, limit);
  const data = await connection
    .select(
      'id',
      'title',
      'measurement',
      'grams',
      'calories',
      'protein',
      'total_carbs',
      'fat',
      'fibre',
      'saturated_fat'
    )
    .from(TABLE)
    .where({ title: query })
    .orWhere('title', 'like', `%${query}%`)
    .offset(offset)
    .limit(limit);

  logger.info('Result of search : ', data, typeof data, data.length + '***');
  return data || !!data.length || !!data.keys.length ? data : null;
}
