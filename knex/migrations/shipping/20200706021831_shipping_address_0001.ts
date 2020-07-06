import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    knex.schema.createTableIfNotExists("shipping_address", function (table) {
        // integer id
        table.increments();
        
        // name
        table.text('street_name').notNullable();

        // area code
        table.string('area_code');

        // city
        table.string('city').notNullable();

        // country
        table.integer('country_id').notNullable();

        // district
        table.string('district');

        // createdAt
        table.dateTime('createdAt').notNullable();

        // updatedAt
        table.dateTime('updatedAt').notNullable();
        
    });

}


export async function down(knex: Knex): Promise<any> {
}

