const mysql = require('mysql');

// 1. Connect to MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // e.g. 'root'
  password: '**********',// optional if no password
  database: 'world'    // your MySQL database name
});

connection.connect(err => {
  if (err) throw err;
  console.log('✅ Connected to MySQL!');
});

// 2. INSERT Users
const insertQuery = `
  INSERT INTO users (email)
  VALUES
    ('Katie@yahoo.com'),
    ('tunde@gmail.com')
`;

connection.query(insertQuery, (error, results) => {
  if (error) throw error;
  console.log('✅ Inserted users.');

  // 3. SELECT all users
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log('📋 All Users:', results);

    // 4. Access 2nd user's email
    if (results.length > 1) {
      console.log('📧 Second user email:', results[1].email);
    }

    // 5. COUNT users
    connection.query('SELECT COUNT(*) AS total FROM users', (e, r) => {
      if (e) throw e;
      console.log('👥 Total users:', r[0].total);

      // 6. Close connection
      connection.end();
    });
  });
});
