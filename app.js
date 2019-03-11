const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// from controller
const indexController = require('./controller/index')
const redirectController = require('./controller/redirect')

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// set view
app.set('view engine', 'ejs')

// static files
app.use(express.static('public'))

app.get('/', indexController.index)
app.post('/', indexController.shorten)

app.get('/s/:value', redirectController)

app.listen(3000, function(){
    console.log('success')
});