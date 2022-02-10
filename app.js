const express = require("express");
const cors = require("cors");
const path = require("path");

// Routers
const { todosRouter } = require("./routes/todos.routes");
const { viewsRouter } = require("./routes/views.routes");

// Controllers
const { globalErrorHandler } = require("./controllers/error.controller");

// Init app
const app = express();

app.enable("trust proxy");

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("*", cors());

// Endpoints
app.use("/api/v1/todos", todosRouter);
app.use("/", viewsRouter);

app.use(globalErrorHandler);

module.exports = { app };
