var express = require('express')

var routes = require('./routes/index')

var app = express()

var bodyParser = require('body-parser')

var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({parameterLimit: 10000, extended: true}))

routes(app)

app.set('port', process.env.PORT || 8002);

app.listen(app.get('port'), function(){
    console.log('app listen on port ' + app.get('port'))
})