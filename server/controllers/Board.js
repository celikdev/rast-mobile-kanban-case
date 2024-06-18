const { Board } = require("../models/Board/Board.model");

const getBoards = async (req, res) => {
  const boards = await Board.find();
  if (!boards) {
    res.status(404).json("Boards not found");
  } else {
    res.json(boards);
  }
};

const getBoard = async (req, res) => {
  const { id } = req.params;
  const board = await Board.findById(id);
  if (!board) {
    res.status(404).json("Board not found");
  } else {
    res.json(board);
  }
};

const createBoard = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json("Title is required");
  try {
    const newBoard = await Board.create({ title });
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getBoards, getBoard, createBoard };
