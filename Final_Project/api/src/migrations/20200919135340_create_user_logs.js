/**
 * table name = "user_logs"
 * @param {object} knex
 */

export function up(knex) {
  return knex.schema.createTable('user_logs', function (table) {
    table.increments('id').unsigned().primary(),
      table.integer(`food_id`).references('id').inTable('foods'),
      table.integer('meal_id').references('id').inTable('meals'),
      table.integer('servings').defaultTo(1),
      table.string('measurement').notNull();
    table.float('grams', 8, 2).notNull(),
      table.float('calories', 8, 2).notNullable(),
      table.float('proteins', 8, 2).nullable(),
      table.float('fats', 8, 2).nullable(),
      table.float('total_carbs', 8, 2).nullable(),
      table.float('saturated_fat', 8, 2).nullable(),
      table.float('fibre', 8, 2).nullable(),
      table.date('loggedDate'),
      table.boolean('is_active').notNull().defaultTo(true),
      table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
  });
}

/**
 *
 * @param {object} knex
 */
export function down(knex) {
  return knex.schema.dropTable('user_logs');
}
