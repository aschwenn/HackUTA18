// Imports
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

// Connect to MySQL database
/*
    process.env.VARNAME
*/
var connection = mysql.createConnection({
    host:       '35.192.65.25',
    user:       'andrew',
    password:   'GigEmAggies',
    database:   'HowdySprinkler'
});
//connection.connect();

// Initialize express sever
var app = express();

// Use dependencies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// HTTP request handlers
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/getData/', (req, res) => {
    let sql = '';

    res.send('gigem');
});
app.post('/postData/', (req, res) => {
    if (!req.body || !req.body.name || !req.body.id || !req.body.amount
        || !req.body.period || !req.body.scheduled) {
        res.status(400).send('400 error!');
    }
    console.log('POST request for plant "' + req.body.name + '"');

    let sql = '';

    res.send('id ' + id);
});

// Start server on a port
var port = 8080;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});


// Close database connection
//connection.end();