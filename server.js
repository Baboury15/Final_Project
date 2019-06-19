let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
let app= express();

let pool = new pg.Pool({
    port: 5432,
    password: 'Tiger12345',
    database: 'newyork',
    max: 10,
    host: 'localhost',
    user:'postgres'
});