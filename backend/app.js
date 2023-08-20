const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectToMongoDB = require("./configs/mongodb");
const cors = require("cors");
const socketio = require("socket.io");

let usersRoutes = require("./routes/users.routes");
let videosRoutes = require("./routes/videos.routes");
let productsRoutes = require("./routes/products.routes");
let commentsRoutes = require("./routes/comments.routes");

dotenv.config();
const app = express();
const server = require("http").Server(app);
const io = socketio(server);
connectToMongoDB();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server Ready!!" });
});

app.use("/users/", usersRoutes);
app.use("/videos/", videosRoutes);
app.use("/products/", productsRoutes);
app.use("/comments/", commentsRoutes);

app.use((req, res) => {
  res.status(404).json({ msg: "Not found" });
});

const port = process.env.PORT || 5100;
server.listen(port, () => {
  console.log(`Midterm server is running on port: ${port}`);
});

io.on("connection", (socket) => {
  console.log(`Socket ${socket.id} connected!`);

  socket.on("sendComment", (comment) => {
    io.emit("message", comment);
  });

  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});

module.exports = { server };
