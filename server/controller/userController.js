const bqcrypt = require('bcrypt');
const ApiError = require("../error/Apierror");
const {User} = require("../models/models");
const generationJwt = require("../util/generationJwt");

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body;
        if (!email || !password) {
            return next(ApiError.noRequest("Некорректные данные авторизации"));
        }
        const checkEmail = await User.findOne({where: {email}});
        if (checkEmail) {
            return next(ApiError.noRequest("Такой пользователь уже существует"));
        }
        const hasPassword = await bqcrypt.hash(password, 3);
        const user = await User.create({email, password: hasPassword})
        const token = generationJwt(user.id, user.email)
        res.json(token);
    }

    async check(req, res, next) {
        const token = generationJwt(req.user.id, req.user.email);
        res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal("Email не найден"));
        }
        const comparePassword = bqcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.noRequest("Пароли не совпадают"));
        }
        const token = generationJwt(user.id, user.email)
        res.json(token);
    }
}

module.exports = new UserController();
