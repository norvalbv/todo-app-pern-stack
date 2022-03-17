const express = require("express");
const app = express();
const routes = require("./routes/todo");
const cors = require("cors");

const port = process.env.PORT || 5000;

// Middlewear

app.use(cors());
app.use(express.json());

// Routes

app.post("/todos", routes.createTodo);

app.get("/todos", routes.getAllTodos);

app.get("/todos/:id", routes.getTodo);

app.put("/todos/:id/description", routes.updateTodo);

app.put("/todos/:id/:complete", routes.completeTodo);

app.delete("/todos/delete", routes.clearComplete);

app.delete("/todos", routes.deleteAllTodos);

app.delete("/todos/:id", routes.deleteTodo);

app.listen(port, function () {
  console.log("Listening on port 5000");
});
