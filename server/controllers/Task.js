const { Board } = require("../models/Board/Board.model");

const createTask = async (req, res) => {
  const { title, description, listID } = req.body;
  if (!title || !listID)
    return res.status(400).json("Title and listID are required");
  try {
    const board = await Board.findOneAndUpdate(
      { "lists._id": listID },
      {
        $push: {
          "lists.$.tasks": {
            title,
            description,
          },
        },
      },
      { new: true }
    );
    res.status(201).json(board);
  } catch (error) {
    res.status(400).json(error);
  }
};

const editTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  if (!title) return res.status(400).json("Title is required to edit a task");
  try {
    const board = await Board.findOneAndUpdate(
      { "lists.tasks._id": id },
      {
        $set: {
          "lists.$[list].tasks.$[task].title": title,
          "lists.$[list].tasks.$[task].description": description,
        },
      },
      {
        arrayFilters: [{ "list.tasks._id": id }, { "task._id": id }],
        new: true,
      }
    );
    res.status(200).json(board);
  } catch (error) {
    res.status(400).json(error);
  }
};

const reorderTasks = async (req, res) => {
  const { listId, taskId } = req.body;

  if (!listId || !taskId) {
    return res.status(400).json("List ID and Task ID are required");
  }

  try {
    const board = await Board.findOne({ "lists.tasks._id": taskId });
    const task = board.lists.find((list) => list.tasks.id(taskId));
    const taskIndex = task.tasks.findIndex((task) => task.id === taskId);
    const taskToMove = task.tasks.splice(taskIndex, 1)[0];
    const newList = board.lists.find((list) => list.id === listId);
    newList.tasks.push(taskToMove);
    await board.save();
    res.status(200).json(board);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createTask, editTask, reorderTasks };
