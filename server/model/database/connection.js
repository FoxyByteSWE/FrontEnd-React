const mysql = require('mysql2');
const promMysql = require('mysql2/promise');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}

/**
 * query using callback
 * @param {string} sql sql string
 * @param {array} params an array of parameters used in the SQL
 * @param {function} cb callback function - cb(err, result, metaData)
 */
const query = (sql, params, cb) => {
  const connection = mysql.createConnection(config);
  connection.query(sql, params,cb);
  connection.end()
}

/**
 * query using Promise
 * @param {string} sql sql string
 * @param {array} params an array of parameters used in the SQL 
 * @returns 
 */
const promiseQuery = async (sql, params) => {
  const connection = await promMysql.createConnection(config);
  const [rows, fields] = await connection.execute(sql, params);
  connection.end()
  return new Promise((resolve, reject) => {
    resolve(rows)
  })
}

module.exports = {
  query,
  promiseQuery
}