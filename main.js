// load libraries
const express = require('express')
const handlebars = require('express-handlebars')
const fetch = require('node-fetch')
const withQuery = require('with-query')

// configure PORT
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

// create instance of the application
const app = express()

// setup handlebars
app.engine('hbs', handlebars({ defaultLayout: 'default.hbs' }))
app.set('view engine', 'hbs')

// configure homepage
app.get('/',
  (req, res) => {
    res.status(200)
    res.type('text/html')
    // res.end(`<h1>The time is <code>${new Date()}</code></h1>`)
    res.render('home')
  })

// configure application

// use static folder
app.use(express.static(__dirname + '/static'))

// Error 404
app.use((req, res) => {
  res.status(404)
  res.type('text/html')
  res.sendFile(__dirname + '/static/error404.html')
})
// start the server
app.listen(PORT, () => {
  console.info(`Application started on port ${PORT} on ${new Date()}`)
})