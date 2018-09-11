const express = require('express');

const bodyParser = require('body-parser');
const driver = require('./routes/driver.route');
// initialize our express app
const app = express();


app.use(bodyParser.urlencoded(
    {extended: true}));
app.use(bodyParser.json());


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost/taxi24';
mongoose.connect(dev_db_url);

mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/api', driver);
let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});