const pool = require("../db/db");

// create a todo

const createTodo = (req, res) => {
  const { description } = req.body;
  pool.query(
    "INSERT INTO todo (description) VALUES($1)",
    [description],
    (error, results) => {
      if (error) {
        throw error;
      }
    }
  );
};

// get all todos

const getAllTodos = (req, res) => {
  pool.query("SELECT * FROM todo", (error, results) => {
    if (error) {
      throw error;
    }
  });
};

// get a todo

const getTodo = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM todo WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
  });
};

// update a todo

const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { description } = req.body;
  pool.query(
    "ALTER TABLE todos SET description = $1 WHERE id = $2",
    [description, id],
    (error, results) => {
      if (error) {
        throw error;
      }
    }
  );
};

// delete a todo

const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM todos WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
  });
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
