const express = require("express");
const app = express();
const routes = require("./routes/todo");

const port = process.env.PORT || 5000;

// middlewear

app.use(express.json());

app.post("/todos", routes.createTodo);

app.get("/", routes.getAllTodos);

app.get("todos", routes.getTodo);

app.put("todos/:id", routes.updateTodo);

app.delete("todos/:id", routes.deleteTodo);

app.listen(port, function () {
  console.log("Listening on port 5000");
});
