const User = require('./../models/users')

const getUsers = async (req, res) => {
  try {
    const users = await User.find().exec()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId).exec()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({msg: `Error fetching data: ${err.message}`})
  }
}

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body
    await User.create({username, password})
    res.status(200).json({msg: 'User created!!'})
  } catch (err) {
    res.status(500).json({msg: `Error creating user: ${err.message}`})
  }
}

module.exports = { getUsers, getUserById, createUser }