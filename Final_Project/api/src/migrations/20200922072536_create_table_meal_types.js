// /**
//  * table name = 'table'
//  * @param {object} knex
//  */

// export function up(knex) {
//   return knex.schema.createTable('table', function (table) {
//     table.increments('id').unsigned().primary();
//   });
// }

// /**
//  *
//  * @param {object} knex
//  */
// export function down(knex) {
//   return knex.schema.dropTable('table');
// }
/**
 * table name = 'meal_types'
 * @param {object} knex
 */

export function up(knex) {
  return knex.schema.createTable('meal_types', function (table) {
    table.integer('id').unsigned().primary();
    table.string('type').notNull().unique();
  });
}

/**
 *
 * @param {object} knex
 */
export function down(knex) {
  return knex.schema.dropTable('meal_types');
}
