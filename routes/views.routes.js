const express = require("express");

const { renderIndex } = require("../controllers/views.controller");

const router = express.Router();

router.get("/:route", renderIndex);

module.exports = { viewsRouter: router };
