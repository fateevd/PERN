const Route = require("express");
const route = new Route();
const todoController = require('../controller/todoController');

route.put("/complete/" , todoController.complete);
route.post("/" , todoController.createTodo);
route.put("/update/" , todoController.updateTodo);
route.delete("/:id" , todoController.deleteTodo);
route.get("/todos" , todoController.getAllTodo);
route.get("/:id" , todoController.getCurrentTodo);


module.exports = route;
