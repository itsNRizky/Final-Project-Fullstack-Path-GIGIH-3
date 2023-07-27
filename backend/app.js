const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const connectToMongoDB = require('./configs/mongodb')

let usersRoutes = require('./routes/users.routes')
let videosRoutes = require('./routes/videos.routes')
let productsRoutes = require('./routes/products.routes')
let commentsRoutes = require('./routes/comments.routes')

dotenv.config()
const app = express()
connectToMongoDB()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).json({msg: 'Server Ready!!'})
})

app.use('/users/', usersRoutes)
app.use('/videos/', videosRoutes)
app.use('/products/', productsRoutes)
app.use('/comments/', commentsRoutes)

app.use((req, res) => {
  res.status(404).json({msg: 'Not found'})
})

const port = process.env.PORT || 5100
app.listen(port, () => {
  console.log(`Midterm server is running on port: ${port}`)
})