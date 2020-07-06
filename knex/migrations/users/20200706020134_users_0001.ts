import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    
    knex.schema.createTableIfNotExists("users", function (table) {
        table.increments(); // integer id

        // name
        table.string('username').unique().notNullable();

        // password
        table.string('password');

        // createdAt
        table.dateTime('createdAt').notNullable();

        // updatedAt
        table.dateTime('updatedAt');

        //email
        table.string('email').unique().notNullable();;
    }).then(function () {
        return knex("users").insert([
            {
                username: "admin", 
                password: "admin", 
                createdAt: knex.fn.now(), 
                updatedAt: knex.fn.now(), 
                email: "alexandre.lecom@gmail.com"
            },
        ]);
    });
}


export async function down(knex: Knex): Promise<any> {
}

