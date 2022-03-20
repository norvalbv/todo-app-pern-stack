const express = require("express");
const app = express();
const routes = require("./routes/todo");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const port = process.env.PORT || 5000;

// console.log(str)

// console.log(process.env.NODE_ENV);

// Middlewear

app.use(cors());
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "client/build")));

// }

// Routes

app.post("/todos", routes.createTodo);

app.get("/todos", routes.getAllTodos);

app.get("/todos/:id", routes.getTodo);

app.put("/todos/:id/description", routes.updateTodo);

app.put("/todos/:id/:complete", routes.completeTodo);

app.delete("/todos/delete", routes.clearComplete);

app.delete("/todos", routes.deleteAllTodos);

app.delete("/todos/:id", routes.deleteTodo);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
