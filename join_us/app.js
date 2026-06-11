const express = require('express');
const mysql = require('mysql2');
const bodyParser = require("body-parser");

const app = express();

// View engine setup
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '**************', // Replace with your MySQL password if you set one
  database: 'world'
});

// Home route
app.get("/", function (req, res) {
  const q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function (err, results) {
    if (err) throw err;
    const count = results[0].count;
    res.render("home", { count: count });
  });
});

// Form POST route
app.get("/", function (req, res) {
    var q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function (err, results) {
        if (err) throw err;
        var count = results[0].count;
        res.render("home", { count: count });
    });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});


// Start the server
app.listen(8080, function () {
  console.log("✅ Server running on http://localhost:8080");
});



