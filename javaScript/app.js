const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '**********', // Replace with your actual password
  database: 'join_us'     // Replace with your actual DB name
});

connection.connect(err => {
  if (err) {
    console.error('Connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

const { faker } = require('@faker-js/faker');

// Generate a fake user
const user = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  job: faker.person.jobTitle()
};

console.log(user);

const sql = "INSERT INTO users (name, email, job) VALUES (?, ?, ?)";
const values = [user.name, user.email, user.job];

connection.query(sql, values, (err, result) => {
  if (err) throw err;
  console.log("1 user inserted, ID:", result.insertId);
});

const q = 'SELECT CURDATE()';

connection.query(q, function(error, results, fields) {
  if (error) throw error;
  console.log('The current date is:', results[0]['CURDATE()']);
});
