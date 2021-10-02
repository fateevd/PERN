const jwt = require("jsonwebtoken");

const generationJwt = (id, email) => jwt.sign({id, email}, process.env.SECRET_KEY, {expiresIn: "24h"})


module.exports = generationJwt;