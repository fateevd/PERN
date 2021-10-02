const Route = require("express");
const route = new Route();
const userController = require('../controller/userController');
const authMiddleware = require("../middleware/authMidlleware");


route.post("/registration", userController.registration);
route.post("/login", userController.login);
route.get("/auth", authMiddleware, userController.check);

module.exports = route;


