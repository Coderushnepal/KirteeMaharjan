import knex from 'knex';

import dbConfig from './knexfile';

const connection = knex(dbConfig);

export default connection;
