const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // your MySQL user
  password: '********', // your MySQL password
  database: 'world'   // your database
});

const q = 'DELETE FROM users';

connection.query(q, function (err, result) {
  if (err) throw err;
  console.log(`✅ Deleted ${result.affectedRows} users.`);
  connection.end();
});

