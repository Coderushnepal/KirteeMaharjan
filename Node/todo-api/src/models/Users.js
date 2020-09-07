import camelize from 'camelize';
import snakeize from 'snakeize';

import connection from '../db';

const TABLE = 'users';

export async function getByEmail(email) {
  const [result] = await connection.select('*').from(TABLE).where({ email });

  return result ? camelize(result) : null;
}

export async function getById(id) {
  const [result] = await connection.select('*').from(TABLE).where({ id });

  return result ? camelize(result) : null;
}

export async function createUser(payload) {
  const [result] = await connection.insert(snakeize(payload)).into(TABLE).returning('*');

  return camelize(result);
}

export async function remove(id) {
  await connection(TABLE).update({ is_active: false }).where({ id });
}
