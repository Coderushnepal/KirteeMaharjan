/**
 *
 * @param {object} knex
 */
export function up(knex) {
  return knex.schema.createTable('foods', function (table) {
    table.increments('id').unsigned().primary();
    table.string('title', 200).notNull();
    table.string('measurement').notNull().defaultTo('g');
    table.integer('grams').notNull().defaultTo(100);
    table.float('calories', 8, 2).nullable();
    table.float('total_carbs', 8, 2).nullable();
    table.float('protein', 8, 2).nullable();
    table.float('fibre', 8, 2).nullable();
    table.float('fat', 8, 2).nullable();
    table.float('saturated_fat', 8, 2).nullable();
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.boolean('is_active').notNull().defaultTo(true);
  });
}

/**
 *
 * @param {object} knex
 */
export function down(knex) {
  return knex.schema.dropTable('foods');
}
