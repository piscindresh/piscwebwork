const mysql = require("mysql2");

let pool = mysql.createPool({
  host: "localhost",
  port:3306,
  user: "root",
  password: "123@indreshH",
  database: "mydb",
});

module.exports = { pool };
