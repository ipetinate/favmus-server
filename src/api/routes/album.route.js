const express = require('express')
const router = express.Router()

const albumController = require('../controllers/album.controller')

router.get('/', albumController.getAll)
router.get('/:id', albumController.getById)
router.post('/create', albumController.create)
router.put('/update/:id', albumController.update)
router.delete('/delete/:id', albumController.delete)

module.exports = router
