/**
 * Create table `user_sessions`
 *
 * @param {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('user_sessions', function (table) {
    table.increments('id').primary();
    table.integer('user_id').notNull().references('id').inTable('users');
    table.string('token', 600).notNull();
    table.boolean('is_active').notNull().defaultTo(true);
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
  });
}

/**
 * Drop table `user_sessions`.
 *
 * @param {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('user_sessions');
}
