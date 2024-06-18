const { Router } = require("express");

const { getBoards, createBoard, getBoard } = require("../controllers/Board");
const TaskRouter = require("./Task");

const BoardRouter = Router();

BoardRouter.get("/", getBoards);
BoardRouter.get("/:id", getBoard);
BoardRouter.post("/", createBoard);

BoardRouter.use("/task", TaskRouter);

module.exports = BoardRouter;
