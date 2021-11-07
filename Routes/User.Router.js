module.exports = app => {

const user = require('../Controllers/User.Controller')

app.get('/users', user.findAll)
app.post('/getUserByEmail', user.findByEmail)
app.put('/updateByEmail', user.updateByEmail)

}