import camelize from 'camelize';
import connection from '../db';
import snakeize from 'snakeize';

const TABLE = 'user_sessions';

export async function saveToken(userId, token) {
  const [result] = await connection.insert({ user_id: userId, token }).into(TABLE).returning('*');
  return camelize(result);
}

export async function get(params) {
  const [data] = await connection.select('*').from(TABLE).where(snakeize(params));
  return data ? camelize(data) : null;
}
