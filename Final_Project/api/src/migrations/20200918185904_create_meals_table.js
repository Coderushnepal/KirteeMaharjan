/**
 * table name = "meals"
 * @param {object} knex
 */

export function up(knex) {
  return knex.schema.createTable('meals', function (table) {
    table.increments('id').unsigned().primary();
    table.integer('recipie_id').unsigned();
    table.string('title', 200).notNull();
    table.float('calories', 8, 2).nullable();
    table.float('carbs', 8, 2).nullable();
    table.float('protein', 8, 2).nullable();
    table.float('fat', 8, 2).nullable();
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.boolean('is_active').notNull().defaultTo(true);
  });
}

/**
 *
 * @param {object} knex
 */
export function down(knex) {
  return knex.schema.dropTable('meals');
}
