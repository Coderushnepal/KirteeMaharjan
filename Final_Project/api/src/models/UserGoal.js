import snakeize from 'snakeize';
import camelize from 'camelize';

import connection from '../db';

const TABLE = 'user_goals';

/**
 *
 * @param {object} payload
 * @param {integer} id
 */
export async function set(payload) {
  console.log(snakeize(payload));
  const [data] = await connection
    .insert(snakeize(payload))
    .into(TABLE)
    .returning(['calories', 'protein', 'fat', 'carbs']);
  return data;
}

/**
 *
 * @param {object} payload
 * @param {integer} id
 */
export async function update(payload, userId) {
  console.log();
  const [data] = await connection(TABLE)
    .update(snakeize(payload))
    .where({ user_id: userId })
    .returning(['calories', 'protein', 'fat', 'carbs']);
  console.log('Updated goal', data);
  return camelize(data);
}

/**
 *
 * @param {integer} userId
 */
export async function get(userId) {
  const [data] = await connection
    .select('calories', 'protein', 'fat', 'carbs')
    .from(TABLE)
    .where({ user_id: userId });
  return camelize(data);
}
