/**
 * Create table `user_todos`
 *
 * @param {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('user_todos', function (table) {
    table.increments('id').unsigned().primary();
    table.integer('user_id').references('id').inTable('users');
    table.string('todo_text', 500).notNull();
    table.boolean('is_active').notNull().defaultTo(true);
    table.boolean('is_completed').notNull().defaultTo(false);
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
  });
}

/**
 * Drop table `user_todos`.
 *
 * @param {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('user_todos');
}
