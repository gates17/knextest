import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    knex.schema.createTableIfNotExists("category", function (table) {
        table.increments(); // integer id
    
        // name
        table.string('name').unique().notNullable();
    
        // migration_file
        table.string('type');

        // parent
        table.integer('category_id');
    
        // createdAt
        table.dateTime('createdAt').notNullable();

        // updatedAt
        table.dateTime('updatedAt');
    });

}


export async function down(knex: Knex): Promise<any> {
}

