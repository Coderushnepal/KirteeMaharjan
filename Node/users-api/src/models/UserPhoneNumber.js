import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

const table = 'user_phone_numbers';

export async function getPhoneNumbersByUserId(userId) {
    const result = await connection
        .select('id', 'phone_number', 'type')
        .from(table)
        .where('user_id', userId);

    return camelize(result);
}

export async function add(params) {
    const data = snakeize(params);
    const result = await connection
        .batchInsert(table, data)
        .returning('id', 'phone_number', 'type');
    return camelize(result);
}

// export async function remove(userId) {
//     await
// }
