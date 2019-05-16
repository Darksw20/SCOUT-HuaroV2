'use_strict'
const {
    Pool,
    Client
} = require('pg');

const env = {
    production: {
        env: "Production",
        user: process.env.PRO_USER,
        host: process.env.PRO_DB_HOST,
        database: process.env.PRO_DB_NAME,
        password: process.env.PRO_DB_PASS,
        port: 5432
    },
    development: {
        env: "Development",
        user: process.env.DEV_DB_USER,
        host: process.env.DEV_DB_HOST,
        database: process.env.DEV_DB_NAME,
        password: process.env.DEV_DB_PASS,
        port: 5432
    }
}
var working_environment =
    process.env.NODE_ENV === 'development' ?
    env.development : env.production;

    console.log(""+process.env.NODE_ENV)

const client = new Client(working_environment);
console.log('conection made to:', working_environment.env);

module.exports = client;