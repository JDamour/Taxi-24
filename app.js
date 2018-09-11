const express = require('express');
const bodyParser = require('body-parser');
const driver = require('./routes/driver.route'); // Imports routes for the Driver
// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://taxi-24:taxi-24@ds251332.mlab.com:51332/taxi-24';
let dev_db_url = 'mongodb://taxi24:taxi24@ds151012.mlab.com:51012/taxi24';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/driver', driver);
let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});