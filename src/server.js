const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Routes
const album = require('./api/routes/album.route')

// App
const app = express()

// Configs
const PORT = 3000
const connectionString = 'mongodb://localhost:27017/favmus'

// JSON setup
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/album', album)

app.listen(PORT, () => {
  console.log(`
---> App listening on port: ${PORT}
---
---> Go to http://localhost:${PORT} to check API docs on swagger
---> Go to http://localhost:${PORT}/album to get all albums
  `)
})

// Setup Mongo Connection
mongoose.connect(connectionString)
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'DB Error'))
