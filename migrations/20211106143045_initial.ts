import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('journeys', function (table) {
            table.string('id').primary();
            table.string('email').notNullable();
            table.string('name').notNullable();
            table.string('country').notNullable();
            table.date('startdate').notNullable();
            table.date('enddate').notNullable();
        }).createTable('users', function (table) {
            table.string('email').primary();
            table.string('password').notNullable();
        }).createTable('sessionIds', function (table) {
            table.string('email').primary();
            table.string('sessionId').notNullable().unique();
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTableIfExists('journeys')
        .dropTableIfExists('users')
        .dropTableIfExists('sessionIds')
}

