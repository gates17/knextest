import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    knex.schema.createTableIfNotExists("discount", function (table) {
         // integer id
        table.increments(); 
    
        // name
        table.string('type');
    
        // migration_file
        table.float('value');
    });

}


export async function down(knex: Knex): Promise<any> {
}

