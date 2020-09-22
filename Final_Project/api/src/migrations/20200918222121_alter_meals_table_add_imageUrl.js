exports.up = function (knex, Promise) {
  return knex.schema.table('meals', function (table) {
    table.string('image_url').notNull();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table('meals', function (table) {
    table.dropColumn('image_url');
  });
};
