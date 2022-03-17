const pool = require("../db/db");

// create a todo

const createTodo = async (req, res) => {
  const { input } = req.body;
  try {
    const newTodo = await pool.query(
      "INSERT INTO todo (description, complete) VALUES ($1, $2) RETURNING *",
      [input, false]
    );

    res.json(newTodo.rows[0]);
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

// clear complete

const clearComplete = async () => {
  try {
    await pool.query("DELETE FROM todo WHERE complete = true");
  } catch (error) {
    console.error(error);
  }
};

// update a todo

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await pool.query("UPDATE todo SET description = $1 WHERE id = $2", [
      description,
      id,
    ]);
    res.json("todo was updated");
  } catch (error) {
    console.error(error);
  }
};

// set todo complete

const completeTodo = async (req, res) => {
  try {
    const { complete, id } = req.params;
    const updateComplete = await pool.query(
      "UPDATE todo SET complete = $1 WHERE id = $2",
      [complete, id]
    );
    res.json("todo complete boolean was updated");
  } catch (error) {
    console.error(error);
  }
};

// delete all todos

const deleteAllTodos = async (req, res) => {
  try {
    await pool.query("DELETE FROM todo");
    res.json("All todos were deleted.");
  } catch (error) {
    console.error(error);
  }
};

// delete a todo

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM todo WHERE id = $1", [id]);
    res.json("Todo was deleted");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodo,
  clearComplete,
  updateTodo,
  completeTodo,
  deleteAllTodos,
  deleteTodo,
};
