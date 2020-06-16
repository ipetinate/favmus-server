const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlbumSchema = new Schema({
  band: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  release: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Album', AlbumSchema)
