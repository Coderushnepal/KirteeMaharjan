import camelize from 'camelize';

import connection from '../db';
import snakeize from 'snakeize';

const TABLE = 'user_todos';

/**
 * Get all todos
 *
 * @param {number} userId
 */
export async function getAll(userId) {
  const result = await connection
    .select('*')
    .from('user_todos')
    .where({ user_id: userId, is_active: true });

  return result.length ? camelize(result) : [];
}

/**
 * Get specific todo
 *
 * @param {number} id
 * @param {number} userId
 */
export async function getById(userId, id) {
  const [result] = await connection
    .select('*')
    .from(TABLE)
    .where({ id, user_id: userId, is_active: true });

  return result ? camelize(result) : null;
}

/**
 * Add  todo(s)
 *
 * @param {object} payload
 */
export async function add(payload) {
  console.log(payload);
  const [result] = await connection.insert(snakeize(payload)).into(TABLE).returning('*');
  console.log(result);
  return camelize(result);
}

/**
 * Remove a todo
 *
 * @param {number} id
 */
export async function remove(userId, todoId) {
  await connection(TABLE).update({ is_active: false }).where({ id: todoId, user_id: userId });
}

/**
 * Update a todo
 *
 * @param {number} userId
 * @param {object} payload
 */
export async function update(userId, todoId, params) {
  const [result] = await connection(TABLE)
    .update(snakeize(params))
    .where({ id: todoId, user_id: userId })
    .returning('*');
  return camelize(result);
}
