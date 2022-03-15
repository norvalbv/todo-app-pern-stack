import { useState } from "react";
import "./listinput.scss";

export default function ListItem({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { input };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="todo-input-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="checkbox"></div>
        <input
          placeholder="Create a new todo..."
          value={input}
          onChange={handleChange}
          name="text"
          className="todo-input"
        />
      </form>
    </div>
  );
}
