const session = require('express-session');

module.exports = session(
    {
      secret: 'HuaroDeJaliscoParaElMundo',
      resave: true,
      saveUninitialized: false,
      cookie:
      {
        maxAge: 1000 * 60 * 60 * 24 * 30
      }
    }
  )