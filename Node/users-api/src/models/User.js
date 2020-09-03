import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

import { FETCH_USERS_WITH_PHONE_NUMMBERS } from '../db/queries/user';

const table = 'users';

export async function getAll() {
    const { rows } = await connection.raw(FETCH_USERS_WITH_PHONE_NUMMBERS);
    return camelize(rows);
}

export async function getById(id) {
    const [result] = await connection
        .select('*')
        .from(table)
        .where({ id })
        .where('is_active', true);
    return result ? camelize(result) : null;
}

export async function create(params) {
    const [data] = await connection.insert(snakeize(params)).into(table).returning('*');
    return camelize(data);
}

export async function remove(userId) {
    const data = connection(table).update('is_active', false).where('id', userId).returning('*');
    return data;
}

export function update(userId, params) {
    return connection(table).update(snakeize(params)).where({ id: userId }).returning('*');
}
