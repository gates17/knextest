import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    knex.schema.createTableIfNotExists("product", function (table) {
        // integer id
        table.increments(); 
        
        // name
        table.string('name').notNullable();
        
        //price
        table.integer('price_id').notNullable();

        //available stock
        table.bigInteger('stock').notNullable().defaultTo(0);
        
        //taxes
        table.integer('taxes_id').notNullable();

        //discount
        table.integer('discount_id');

        // createdAt
        table.dateTime('createdAt').notNullable();

        // updatedAt
        table.dateTime('updatedAt');
    });

}


export async function down(knex: Knex): Promise<any> {
}

