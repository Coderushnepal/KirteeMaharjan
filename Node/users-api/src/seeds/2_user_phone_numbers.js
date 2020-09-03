export function seed(knex) {
    return knex('user_phone_numbers').insert([
        {
            user_id: 2,
            phone_number: 9876543210,
            type: 'home'
        },
        {
            user_id: 2,
            phone_number: 9874563780,
            type: 'cell'
        }
    ]);
}
