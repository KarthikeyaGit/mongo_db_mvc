module.exports = app => {

    const loginuser = require('../Controllers/Login.Controller')
    
    app.get('/login', loginuser.login)

    }