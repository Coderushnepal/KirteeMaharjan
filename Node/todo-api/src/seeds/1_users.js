export function seed(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'John',
          last_name: 'Doe',
          email: 'johndoe321@gmail.com',
          password: ' sdljkfio3498'
        },
        {
          first_name: 'Karen',
          last_name: 'Karen',
          email: 'karenkaren@gmail.com',
          password: 'lajoii4590kid '
        },
        {
          first_name: 'Jhilke',
          last_name: 'Mama',
          email: 'jhilkey@gmail.com',
          password: 'saji07rdna8 '
        }
      ]);
    });
}
