import snakeize from 'snakeize';
import camelize from 'camelize';

import connection from '../db';

const TABLE = 'users';

/**
 * Add credentials of new user to database
 *
 * @param {*} payload
 */
export async function CreateUser(payload) {
  console.log(payload);
  const [restult] = await connection.insert(snakeize(payload)).into(TABLE).returning('*');
  return camelize(restult);
}

/**
 *
 * @param {string} email
 */
export async function getByEmail(email) {
  const [result] = await connection.select('*').from(TABLE).where({ email, is_active: true });
  return result ? camelize(result) : null;
}

/**
 *
 * @param {integer} id
 */
export async function remove(id) {
  const [data] = await connection(TABLE).update({ is_active: false }).where({ id }).returning('*');
  return data;
}
