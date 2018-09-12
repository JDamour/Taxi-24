const express = require('express');

const bodyParser = require('body-parser');
const driver = require('./routes/driver.route');
const trip = require('./routes/trip.route');

const rider = require('./routes/rider.route');

// initialize our express app
const app = express();


app.use(bodyParser.urlencoded(
    {extended: true}));
app.use(bodyParser.json());


// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/taxi24", { useNewUrlParser: true });
// mongoose.connect("mongodb://taxi24:taxi24@ds151012.mlab.com:51012/taxi24",{ useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.once('open',function con () {
    console.log('Connection Has been made');

});


app.use('/api', driver);
app.use('/api', trip);
app.use('/api', rider);
let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});