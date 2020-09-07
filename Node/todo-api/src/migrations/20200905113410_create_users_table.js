/**
 * Create table `users`
 *
 * @param {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').unsigned().primary();
    table.string('first_name', 50).unsigned().notNull();
    table.string('last_name', 50).notNull();
    table.string('email', 50).notNull().unique();
    table.string('password', 500).notNull();
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.boolean('is_active').notNull().defaultTo(true);
  });
}

/**
 * Drop table `users`.
 *
 * @param {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('users');
}
