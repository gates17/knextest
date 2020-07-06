import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    knex.schema.createTableIfNotExists("brand", function (table) {
        table.increments(); // integer id
    
        // name
        table.string('name').notNullable();
        
        // createdAt
        table.dateTime('createdAt').notNullable();
    
        // updatedAt
        table.dateTime('updatedAt');
    });

}


export async function down(knex: Knex): Promise<any> {
}

