const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '*************',
  database: 'join_us'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

// Query 1: 1 + 5
connection.query('SELECT 1 + 5 AS answer', (error, results, fields) => {
  if (error) throw error;
  console.log('1 + 5 =', results[0].answer);
});

// Query 2: CURTIME(), CURDATE(), NOW()
const q = 'SELECT CURTIME() AS time, CURDATE() AS date, NOW() AS now';

connection.query(q, (error, results, fields) => {
  if (error) throw error;
  console.log('Date and Time Info:', results[0]);

  // Close the connection *after all queries have run*
  connection.end();
});
