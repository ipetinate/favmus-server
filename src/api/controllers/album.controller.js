const Album = require('../models/album.model')

exports.getAll = (req, res, next) => {
  Album.find((error, albums) => {
    if (error) return next(error)

    res.send(albums)
  })
}

exports.getById = (req, res, next) => {
  Album.findById(
    req.params.id,
    (error, album) => {
      if (error) return next(error)

      res.send({
        id: album._id,
        band: album.band,
        name: album.name,
        release: album.release
      })
    }
  )
}

exports.create = (req, res, next) => {
  const album = new Album({
    band: req.body.band,
    name: req.body.name,
    release: new Date(req.body.release)
  })

  album.save(function (error) {
    if (error) {
      return next(error)
    }

    res.send('Album created successfully!')
  })
}

exports.update = (req, res, next) => {
  Album.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, album) => {
      if (error) { return next(error) }

      res.send('Album updated!')
    }
  )
}

exports.delete = (req, res, next) => {
  Album.findOneAndDelete(
    req.params.id,
    (error) => {
      if (error) { return next(error) }

      res.send({
        status: 200,
        message: 'Album successfully deleted!'
      })
    }
  )
}
