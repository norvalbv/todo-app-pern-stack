import { useState } from "react";
import "./listinput.scss";

export default function ListItem() {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { input };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
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
          onChange={(e) => setInput(e.target.value)}
          name="text"
          className="todo-input"
        />
      </form>
    </div>
  );
}
