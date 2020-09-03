//two functions: up , down

// create table
export async function up(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id');
        table.string('first_name', 30);
        table.string('last_name', 30).notNullable();
        table.string('email', 100).notNullable().unique();
        table.string('password', 200).notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.boolean('is_active').notNullable().defaultTo(true);
    });
}

//drop table
export async function down(knex) {
    return knex.schema.dropTable('users');
}
