const express = require('express')
const router = express.Router()
const commentsControllers = require('./../controllers/comments.controllers')

router.get('/', commentsControllers.getComments)
router.get('/:videoId', commentsControllers.getCommentsByVideo)
router.post('/', commentsControllers.createComment)

module.exports = router