const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.pg_user,
  password: process.env.pg_password,
  host: process.env.pg_host,
  port: process.env.pg_port,
  database: process.env.pg_database,
};

const proConfig = {
  connectionString: process.env.HEROKU_POSTGRESQL_PURPLE_URL,
  ssl: { rejectUnauthorized: false },
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
