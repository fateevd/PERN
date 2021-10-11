const {Todo, User} = require("../models/models");
const ApiError = require("../error/Apierror");
const {where} = require("sequelize");


class TodoController {
    async getAllTodo(req, res, next) {
        const {userId} = req.query;
        const getTodo = await Todo.findAll({where: {userId}})
        if (!getTodo.length) {
            return next(ApiError.noRequest("Список задач пуст"))
        }
        res.json(getTodo);
    }

    async getCurrentTodo(req, res) {
        const {id} = req.params;
        const getTodo = await Todo.findOne({where: {id}});
        res.json(getTodo)
    }


    async createTodo(req, res) {
        const {title, description, userId} = req.body;
        const todo = await Todo.create({title, description, userId});
        const getTodo = await Todo.findAll({where: {userId}})
        return res.json(getTodo);
    }

    async updateTodo(req, res) {
        const {title, description, id} = req.query;
        const todo = await Todo.update({title, description}, {where: {id}});
        res.json("Запись обновлена");
    }

    async deleteTodo(req, res, next) {
        const {id} = req.params;
        const findId = await Todo.findOne({where: {id}});
        if (!findId) {
            return next(ApiError.forbidden("Такой записи не существует"));
        }
        const {title, description} = req.body;
        const todoDelete = await Todo.destroy({where: {id}});
        res.json("Запись удалена")
    }

    async complete(req, res) {
        const {id, completed, userId} = req.query;
        const completeTodo = await Todo.update({completed}, {where: {id}});
        const getTodo = await Todo.findAll({where: {userId}})
        res.json(getTodo);
    }
}

module.exports = new TodoController()