import { useState } from "react";

export default function TodoFilter({ getAllTodos, setTodos }) {
  const [status, setStatus] = useState("all");

  const baseURL = "connect-2-dublin.heroku.com/api/v3";

  const displayComplete = async () => {
    const data = await fetch(`http://${baseURL}/todos`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const response = await data.json();
    const filter = response.filter((item) => item.complete);
    setTodos(filter);
    setStatus("complete");
  };

  const displayActive = async () => {
    const data = await fetch(`http://${baseURL}/todos`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const response = await data.json();
    const filter = response.filter((item) => !item.complete);
    console.log(filter);
    setTodos(filter);
    setStatus("active");
  };
  
  return (
    <div className="todo-filter">
      <button
        onClick={() => {
          getAllTodos();
          setStatus("all");
          console.log("all todos requested");
        }}
        className={status === "all" ? "currentlyAll sorting" : "sorting"}
      >
        All
      </button>
      <button
        className={status === "active" ? "currentlyAll sorting" : "sorting"}
        onClick={() => displayActive()}
      >
        Active
      </button>
      <button
        className={status === "complete" ? "currentlyAll sorting" : "sorting"}
        onClick={() => displayComplete()}
      >
        Completed
      </button>
    </div>
  );
}
