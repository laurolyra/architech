const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "architech",
  password: "password",
  port: 5432,
});

export default pool;
