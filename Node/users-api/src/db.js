import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

const connection = knex(dbConfig);

export default connection;
