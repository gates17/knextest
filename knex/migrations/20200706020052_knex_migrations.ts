import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    knex.schema.createTableIfNotExists("knex_migrations", function (table) {
        table.increments(); // integer id
    
        // name
        table.string('tablename').unique().notNullable();
    
        // migration_file
        table.string('filename');
    
        // createdAt
        table.dateTime('createdAt').notNullable();
    });

}


export async function down(knex: Knex): Promise<any> {
    knex.schema.dropTableIfExists('knex_migrations');
}


