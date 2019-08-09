const express = require("express");
const routes = express.Router();
const devController = require("./controllers/DevController");
const likesController = require("./controllers/LikeController");
const dislikesController = require("./controllers/DislikeController");

routes.get("/devs", devController.index);
routes.post("/devs", devController.store);
routes.post("/devs/:id/likes", likesController.store);
routes.post("/devs/:id/dislikes", dislikesController.store);

module.exports = routes;