const Comment = require('../models/comments')

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().exec()
    res.status(200).json(comments)
  } catch (err){
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const getCommentsByUser = async (req, res) => {
  try {
    const userId = req.body.id
    const comments = await Comment.find({user_id: userId}).exec()
    res.status(200).json(comments)
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const getCommentsByVideo = async (req, res) => {
  try {
    const videoId = req.params.videoId
    const comments = await Comment.find({video_id: videoId}).exec()
    res.status(200).json(comments)
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const createComment = async (req, res) => {
  try {
    const { value, user_id, video_id } = req.body
    await Comment.create({value, user_id, video_id})
    res.status(200).json({msg: `Comment added!!`})
  } catch (err) {
    res.status(500).json({msg: `Error adding comment: ${err.message}`})
  }
}

module.exports = { getComments, getCommentsByUser, getCommentsByVideo, createComment }