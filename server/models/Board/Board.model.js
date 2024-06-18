const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  listID: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const ListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: [TaskSchema],
});

const BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  lists: {
    type: [ListSchema],
    default: [
      {
        title: "Backlog",
        tasks: [],
      },
      {
        title: "To Do",
        tasks: [],
      },
      {
        title: "In Progress",
        tasks: [],
      },
      {
        title: "Done",
        tasks: [],
      },
    ],
  },
});

const Board = mongoose.model("Board", BoardSchema);

module.exports = { Board };
