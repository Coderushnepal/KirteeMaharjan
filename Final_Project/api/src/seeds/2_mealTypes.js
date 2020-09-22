exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('meal_types')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('meal_types').insert([
        {
          id: 1,
          type: 'breakfast'
        },
        {
          id: 2,
          type: 'lunch'
        },
        {
          id: 3,
          type: 'dinner'
        },
        {
          id: 4,
          type: 'snacks'
        }
      ]);
    });
};
