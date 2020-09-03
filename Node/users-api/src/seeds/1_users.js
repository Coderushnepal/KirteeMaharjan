export function seed(knex) {
    return knex('users').insert([
        {
            first_name: 'John',
            last_name: 'Doe',
            email: 'johndoe321@gmail.com',
            password: ' sdljkfio3498',
            is_active: true
        },
        {
            first_name: 'Karen',
            last_name: 'Karen',
            email: 'karenkaren@gmail.com',
            password: 'lajoii4590kid ',
            is_active: true
        },
        {
            first_name: 'Jane',
            last_name: 'Doe',
            email: 'janedoe999@gmail.com',
            password: 'lajoii4590kid ',
            is_active: true
        }
    ]);
}
