import knex from 'knex';

const db = knex({
  client: 'postgres',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    port: 5434,
    password: 'postgres',
    database: 'knex'
  }
})

export default db