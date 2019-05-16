'use strict';
//
//Modules:  -------------------------------------------
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cookie_parser = require('cookie-parser');



//Dependences:  -----------------------------------------------
const env_setup = require('./config/storage');
const keys = require('./config/keys');
const session = require('./Controllers/Sessions');
const local_strategy = require('./Controllers/Strategies/local');
const app = express();
const huaro_routes = require('./Routes');

// Middlewares: ----------------------------------------------

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookie_parser());
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000 * 90,
    keys: [keys.session.cookie_key]
}));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public', {
    index: false
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Routes: ---------------------------------------------------

huaro_routes(app);

// -----------------------------------------------------------

// Starting the server
var port = process.env.PORT || 3000;
app.listen(port);