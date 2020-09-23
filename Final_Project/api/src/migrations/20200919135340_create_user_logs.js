/*
 * table name = "user_logs"
 * @param {object} knex
 */

export function up(knex) {
  return knex.schema.createTable('user_logs', function (table) {
    table.increments('id').unsigned().primary(),
      table.integer('user_id').unsigned().references('id').inTable('users').notNull(),
      table.integer(`food_id`).references('id').inTable('foods');
    table.integer('servings').defaultTo(1), table.string('measurement').notNull();
    table.float('grams', 8, 2).notNull(),
      table.string('logged_date').notNull(),
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
