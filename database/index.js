const mysql = require('mysql');
// change your database.example.config.js file to match import path below
const password = require('./database.config.js');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : password,
  database : 'resourcely'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 