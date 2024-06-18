const { Router } = require("express");

const BoardRouter = require("./Board");
const MainRouter = Router();

MainRouter.use("/board", BoardRouter);

module.exports = MainRouter;
