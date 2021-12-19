import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('journeys', function (table) {
            table.string('id').primary();
            table.string('name').notNullable();
            table.string('country').notNullable();
            table.date('startdate').notNullable();
            table.date('enddate').notNullable();
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTableIfExists('journeys')
}

