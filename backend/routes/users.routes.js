const express = require("express");
const router = express.Router();
const usersControllers = require("./../controllers/users.controllers");
const videosControllers = require("./../controllers/videos.controllers");
const productsControllers = require("./../controllers/products.controllers");
const commentsControllers = require("./../controllers/comments.controllers");

router.get("/", usersControllers.getUsers);
router.post("/videos", videosControllers.getVideosByUser);
router.get("/videos/:id", videosControllers.getVideoById);
router.post("/products", productsControllers.getProductsByUser);
router.get("/products/:id", productsControllers.getProductById);
router.post("/comments/", commentsControllers.getCommentsByUser);

router.get("/:id", usersControllers.getUserById);
router.post("/signup", usersControllers.createUser);
router.post("/signin", usersControllers.login);

module.exports = router;
