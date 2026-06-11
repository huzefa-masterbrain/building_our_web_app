const mysql = require('mysql');

// Setup connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // change to your MySQL username
  password: '**********', // your MySQL password
  database: 'join_us'
});

// Connect
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

// First query: CURDATE()
const q1 = 'SELECT CURDATE() AS today';
connection.query(q1, function(error, results, fields) {
  if (error) throw error;
  console.log('The current date is:', results[0].today);
});

// Second query: same as above, just shown again for practice
const q2 = 'SELECT CURDATE() AS today';
connection.query(q2, function(error, results, fields) {
  if (error) throw error;
  console.log('The current date again is:', results[0].today);
});

// End connection after all queries
connection.end();

