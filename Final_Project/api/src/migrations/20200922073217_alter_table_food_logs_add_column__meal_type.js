/**
 * table name = 'user_logs'
 * @param {object} knex
 */

export function up(knex) {
  return knex.schema.table('user_logs', function (table) {
    table.integer('meal_type').unsigned().notNull().references().inTable('meal_types');
  });
}

/**
 *
 * @param {object} knex
 */
export function down(knex) {
  return knex.schema.dropColumn('meal_types');
}
