// create table
export async function up(knex) {
    return knex.schema.createTable('user_phone_numbers', function (table) {
        table.increments('id');
        table.integer('user_id', 30).notNullable().references('id').inTable('users');
        table.bigInteger('phone_number').notNullable();
        table.string('type', 4).notNullable();
    });
}

//drop table
export async function down(knex) {
    return knex.schema.dropTable('user_phone_numbers');
}
