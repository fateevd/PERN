const Route = require("express");
const route = new Route();
const userRoute = require("./userRouter");
const todoRoute = require("./todoRouter");

route.use('/user', userRoute);
route.use('/todo' , todoRoute);

module.exports = route;