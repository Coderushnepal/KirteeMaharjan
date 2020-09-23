/**
 * table name = 'user_goals'
 * @param {object} knex
 */

export function up(knex) {
  return knex.schema.createTable('user_goals', function (table) {
    table.increments('id').unsigned().primary();
    table.integer('user_id').references('id').inTable('users').unique(),
      table.float('calories', 8, 2).defaultTo(0),
      table.float('protein', 8, 2).defaultTo(0),
      table.float('fat', 8, 2).defaultTo(0),
      table.float('carbs', 8, 2).defaultTo(0);
  });
}

/**
 *
 * @param {object} knex
 */
export function down(knex) {
  return knex.schema.dropTable('user_goals');
}
