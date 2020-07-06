import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    knex.schema.hasTable('billing_address').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('billing_address', function(table) {
            table.increments(); // integer id
    
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
      });
 

}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists("billing_address");
  /*
  return knex.schema.hasTable('billing_address').then(function(exists) {
    console.log(exists)
      if (exists) {
        return knex.schema.dropTable('billing_address')
      }
    })
    .catch(function(error) {
      console.error(error);
    });
  */
}


