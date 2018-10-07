// Imports
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var Knex = require('knex');
var prompt = require('prompt');

// Connect to MySQL database
/*
    process.env.VARNAME
*/
/*
var connection = mysql.createConnection({
    socketPath: '/cloudsql/hackuta18-218707:us-central1:hackuta18-sql',
    user:       'root',
    password:   'root',
    database:   'HACKUTA'
});
connection.connect();*/
var db = mysql.createConnection({
    host:       'sql3.freemysqlhosting.net',
    port:       '3306',
    user:       'sql3260130',
    password:   'd9zph1U6Al',
    database:   'sql3260130'
});
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});
/*const config = {
    user: 'root',
    passord: 'root',
    database: 'HACKUTA'
};
config.socketPath = `/cloudsql/hackuta18-218707:us-central1:hackuta18-sql`;
const knex = Knex({
    client: 'mysql',
    connection: config
});*/

// Initialize express sever
var app = express();

// Use dependencies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// HTTP request handlers
app.get('/', (req, res) => {
    res.send(`
    <head>
        <title>Howdy</title>
    </head>
    <body style="margin:0;background:linear-gradient(#11998e,#38ef7d);top:50%;position:absolute;padding-left: 44%;font-family: Arial;">
        <h1 style="color:white;"><center>Hello, World!</center></h1>
    </body>
    `);
});
app.get('/getData/', (req, res) => {
    //let q = knex.select('ID', 'NAME', 'AMOUNT', 'PERIOD', 'SCHEDULED', 'MOISTURE', 'WATER_IMMEDIATE', 'AMOUNT2', 'TANK_LOW')
    //    .from('PLANTS')
    //    .then((results) => {console.log(results)} );

    //console.log(q.client._events.query);

    let sql = `SELECT * FROM HACKUTA`;
    db.query(sql, (err, result, fields) => {
        if (err) throw err;
        
        var json = [];
        result.forEach(plant => {
            j = {
                id: plant.id,
                name: plant.name,
                amount: plant.amount,
                period: plant.period,
                scheduled: plant.scheduled,
                moisture: plant.moisture,
                water_immediate: plant.water_immediate,
                amount2: plant.amount2,
                tank_low: plant.tank_low
            }
            json.push(j);
        });

        res.send(json);
    });
});
app.get('/getData2/', (req, res) => {
    let r = {
        id: 1,
        name: 'Reveille',
        amount: 20,
        period: 1440,
        scheduled: true,
        water_immediate: false
    };

    res.send(r);
});
app.post('/postData/', (req, res) => {
    if (!req.body || !req.body.name || !req.body.id || !req.body.amount
        || !req.body.period || !req.body.scheduled) {
        res.status(400).send('400 error!');
    }
    console.log('POST request for plant "' + req.body.name + '"');

    let sql = 'SELECT * FROM `HACKUTA` WHERE id=' + req.body.id;
    db.query(sql, (err, result, fields) => {
        if (err) res.status(200).send(err);

        console.log('constructing post query');
        let a = 'name=`'+req.body.name+'`,amount='+req.body.amount+',period='+req.body.period+',scheduled='+req.body.scheduled+',water_immediate='+req.body.water_immedate;
        let insert = 'id, name, amount, period, scheduled, water_immediate';
        if (req.body.moisture) {
            a += ',moisture='+req.body.moisture;
            insert += ',moisture';
        }
        if (req.body.amount2) {
            a += ',amount2='+req.body.amount2;
            insert += ',amount2';
        }
        if (req.body.tank_low) {
            a += ',tank_low='+req.body.tank_low;
            insert += ',tank_low';
        }

        console.log('determining insert or update');
        if (result.length == 1) {
            // UPDATE
            let sql2 = `UPDATE HACKUTA SET ` + a + ` WHERE id=1`;
            console.log(sql2);
            db.query(sql2, (err2, result2, fields2) => {
                if (err2) res.status(200).send(err2);
    
                res.send(result2);
            });
        }
        else {
            // INSERT
            let sql2 = 'INSERT INTO HACKUTA (' + insert + ') VALUES (NULL,' + a + ')';
            console.log(sql2);
            db.query(sql2, (err2, result2, fields2) => {
                if (err2) res.status(200).send(err2);
    
                res.send(result2);
            });
        }
    });
});

// Start server on a port
var port = 8080;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});