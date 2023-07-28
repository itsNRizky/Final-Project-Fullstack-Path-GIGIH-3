const Video = require('./../models/videos')

const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().exec()
    res.status(200).json(videos)
  } catch (err){
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const getVideoById = async (req, res) => {
  try {
    const videoId = req.params.id
    const video = await Video.findById(videoId).exec()
    res.status(200).json(video)
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const getVideosByUser = async (req, res) => {
  try {
    const userId = req.body.id
    const videos = await Video.find({user_id: userId}).exec()
    res.status(200).json(videos)
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const createVideo = async (req, res) => {
  const {title, url, img, user_id, products} = req.body
  try {
    await Video.create({title, img, products, url, user_id})
    res.status(200).json({msg: `Video added!!`})
  } catch (err) {
    res.status(500).json({msg: `Error adding new video to database: ${err.message}`})
  }
}

const updateVideo = async (req, res) => {
  const { _id, title, url, img, products } = req.body
  try {
    await Video.findByIdAndUpdate(_id, {title, url, img, products}).exec()
    res.status(200).json({msg: `Video updated!!`})
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const deleteVideo = async (req, res) => {
  try {
    const videoId = req.params.id
    await Video.findByIdAndDelete(videoId).exec()
    res.status(200).json({msg: 'Video deleted!'})
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

module.exports = { getVideos, getVideoById, getVideosByUser, createVideo, updateVideo, deleteVideo }