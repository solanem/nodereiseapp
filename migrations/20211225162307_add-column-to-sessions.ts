import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('sessionIds', table => {
        table.string('createdAt');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('sessionIds', table => {
        table.dropColumn('createdAt');
    })
}

