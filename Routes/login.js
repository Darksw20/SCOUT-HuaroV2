'use strict';
const router = require('express').Router();
const passport = require('passport');
const path = require('path');
const client = require('../Controllers/Database/pg_connection')
// ===========================================

// No route given(Landing page):
router.get('/',function(req,res){
    res.clearCookie('connect.sid').sendFile(path.join(__dirname, '../public', 'login.html'));
    client.query('SELECT * FROM Tabla_s')
    .then(resp=>{
        console.log(resp)
    })
})

module.exports = router;