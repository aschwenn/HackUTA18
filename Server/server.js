console.log('Hello, World!\n\n');

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('giem');
});

var port = 3000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});