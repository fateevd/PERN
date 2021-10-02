require('dotenv').config();
const express = require("express");
const route = require("./routes/index");
const sequelize = require("./db");
const errorHandler = require("./middleware/ErrorHandingMiddleware");
const cors = require("cors");
const modules = require("./models/models");


const PORT = process.env.port || 8080;

const app = express()
app.use(cors());
app.use(express.json())
app.use("/api", route);



app.use(errorHandler)

const start = async () => {
  try {
      await sequelize.authenticate()
      await sequelize.sync()
      app.listen(PORT, () => console.log(`server starts...${PORT}`));
  }
  catch (e) {
      console.log(e);
  }
}




start()
