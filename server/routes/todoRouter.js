const Route = require("express");
const route = new Route();
const todoController = require('../controller/todoController');


route.post("/" , todoController.createTodo);
route.put("/:id" , todoController.updateTodo);
route.delete("/:id" , todoController.deleteTodo);
route.get("/todos" , todoController.getAllTodo);
route.get("/:id" , todoController.getCurrentTodo);


module.exports = route;
