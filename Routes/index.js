'use strict';

function all_routes(application){
//Modules:  -----------------------------------------
    const express = require('express');
    let   logger = require('morgan');

//Dependeces:  --------------------------------------
    const r_login = require('./login');

//Routes: -------------------------------------------
    application.use(logger('dev'));
    application.use('/',r_login);

    return application;
}

module.exports = all_routes;