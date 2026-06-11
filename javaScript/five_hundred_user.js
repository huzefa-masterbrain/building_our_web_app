const mysql = require('mysql');
const { faker } = require('@faker-js/faker'); // modern faker version

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '***********',
  database: 'world'
});

// Generate 500 fake users
let data = [];
for (let i = 0; i < 500; i++) {
  data.push([
    faker.internet.email(),
    faker.date.past()
  ]);
}

// SQL bulk insert
const q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function (err, result) {
  if (err) throw err;
  console.log('✅ Bulk insert complete. Rows inserted:', result.affectedRows);
  connection.end();
});

connection.query('SELECT * FROM users', function (err, results) {
  if (err) throw err;
  console.table(results);
  connection.end();
});
