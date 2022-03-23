import { useState, useEffect } from "react";
import cross from "../images/icon-cross.svg";
import "./list.scss";
import TodoFilter from "./todofilter";

export default function List() {
  const [todos, setTodos] = useState([]);

  // const baseURL = "connect-2-dublin.heroku.com/api/v3";

  const getAllTodos = async () => {
    try {
      const data = await fetch(`/todos`);
      const response = await data.json();
      setTodos(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const handleComplete = async (id, complete) => {
    try {
      complete = !complete;
      await fetch(`/todos/${id}/${complete}`, {
        method: "PUT",
      });

      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  };

  const clearCompleted = async () => {
    try {
      await fetch(`/todos/delete`, {
        method: "DELETE",
      });

      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAllTodos = async () => {
    try {
      await fetch(`/todos`, {
        method: "DELETE",
      });
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`/todos/${id}`, {
        method: "DELETE",
      });
      window.location = "/";
      console.log(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ paddingBottom: "2.5rem" }} className="list-container">
      {todos.map((todo) => (
        <div className="list" key={todo.id}>
          <div
            className={
              todo.complete ? "checkbox checkbox-complete" : "checkbox"
            }
            onClick={() => {
              handleComplete(todo.id, todo.complete);
            }}
          />
          <div
            className={todo.complete ? "complete list-text" : "list-text"}
            onClick={() => {
              handleComplete(todo.id, todo.complete);
            }}
          >
            {todo.description}
          </div>
          <div>
            <img
              src={cross}
              alt="remove todo"
              className="remove"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </div>
      ))}
      <div className="bottom-nav">
        <div className="left">
          <p className="items-left">{todos.length} Items Left</p>
        </div>
        <TodoFilter getAllTodos={getAllTodos} setTodos={setTodos} />
        <div className="right">
          <button className="clear-list" onClick={() => clearCompleted()}>
            Clear Completed
          </button>
        </div>
      </div>
      <button onClick={() => deleteAllTodos()} className="clear-all">
        Clear all
      </button>
    </div>
  );
}
