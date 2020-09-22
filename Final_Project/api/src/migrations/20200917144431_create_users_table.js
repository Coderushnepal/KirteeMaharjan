/**
 *
 * @param {object} knex
 */
export function up(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').unsigned().primary();
    table.string('username', 100).notNull();
    table.string('email', 100).notNull().unique();
    table.string('password', 100).notNull();
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.boolean('is_active').notNull().defaultTo(true);
  });
}

/**
 *
 * @param {object} knex
 */
export function down(knex) {
  return knex.schema.dropTable('users');
}
