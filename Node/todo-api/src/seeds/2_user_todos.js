export function seed(knex) {
  // Deletes ALL existing entries
  return knex('user_todos')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user_todos').insert([
        {
          user_id: 1,
          todo_text: 'Go grocerry shopping'
        },
        {
          user_id: 1,
          todo_text: 'Bring out the trash'
        },
        {
          user_id: 2,
          todo_text: 'Buy a flower on the way back'
        }
      ]);
    });
}
