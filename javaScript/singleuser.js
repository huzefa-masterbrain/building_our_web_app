const mysql = require('mysql');
const { faker } = require('@faker-js/faker'); // Install: npm i @faker-js/faker

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // your MySQL user
  password: '********',  // your MySQL password
  database: 'world'     // your database
});

const person = {
  email: faker.internet.email(),
  created_at: faker.date.past()
};

const query = 'INSERT INTO users SET ?';

connection.query(query, person, function (err, result) {
  if (err) throw err;
  console.log('✅ Inserted user:', result);
  connection.end();
});
