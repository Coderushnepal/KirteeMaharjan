require('@babel/register');
const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/../.env' });

const dbconfig = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  migrations: {
    directory: './migrations',
    table: 'migrations',
    stub: './stubs/migration.stub'
  },
  seeds: {
    directory: './seeds'
  }
};

module.exports = dbconfig;
