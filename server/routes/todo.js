const pool = require("../db/db");

// create a todo

const createTodo = (req, res) => {
  const { description } = req.body;
  try {
    pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [
      description,
    ]);
  } catch (error) {
    console.error(error);
  }
};

// get all todos

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error);
  }
};

// get a todo

const getTodo = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);

    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error);
  }
};

// update a todo

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE id = $2",
      [description, id]
    );
    res.json("todo was updated");
  } catch (error) {
    console.error(error);
  }
};

// delete a todo

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [
      id,
    ]);
    res.json("Todo was deleted");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
