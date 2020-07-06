import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    knex.schema.createTableIfNotExists("basketline", function (table) {
        // integer id
        table.increments(); 
    
        //order
        table.string('order_id').unique().notNullable();
    
        // product
        table.string('product_id');
    
        //quantity
        table.integer('quantity').notNullable();

        //price
        table.integer('price_id').notNullable();

        //total
        table.float('total').notNullable();

        //taxes
        table.float('taxes').notNullable();

        //total with taxes
        table.float('total_with_taxes').notNullable();

        //discount
        table.float('discount');
        
        // createdAt
        table.dateTime('createdAt').notNullable();
    });

}


export async function down(knex: Knex): Promise<any> {
}

