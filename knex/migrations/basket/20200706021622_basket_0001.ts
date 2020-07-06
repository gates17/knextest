import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    knex.schema.createTableIfNotExists("basket", function (table) {
        table.increments(); // integer id
    
        // user
        table.string('user_id').unique().notNullable();
        
        // status
        table.string('status');
    });

}

export async function down(knex: Knex): Promise<any> {
}

