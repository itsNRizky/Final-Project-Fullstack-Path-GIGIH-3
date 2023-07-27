const express = require('express')
const router = express.Router()
const videosControllers = require('./../controllers/videos.controllers')

router.get('/', videosControllers.getVideos)
router.get('/:id', videosControllers.getVideoById)

router.post('/', videosControllers.createVideo)
router.put('/', videosControllers.updateVideo)
router.delete('/:id', videosControllers.deleteVideo)

module.exports = router