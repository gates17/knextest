import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    knex.schema.createTableIfNotExists("taxes", function (table) {
        // integer id
        table.increments(); 

        // name
        table.string('name');
        
        // country
        table.integer('country_id');

        // value
        table.float('value');

    });

}


export async function down(knex: Knex): Promise<any> {
}

