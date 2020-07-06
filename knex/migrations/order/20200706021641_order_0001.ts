import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    knex.schema.createTableIfNotExists("order", function (table) {
        table.increments(); // integer id
    
        // name
        table.string('user_id').unique().notNullable();
    
        // migration_file
        table.string('status');
    
        // createdAt
        table.dateTime('createdAt').notNullable();
    });

}


export async function down(knex: Knex): Promise<any> {
}

