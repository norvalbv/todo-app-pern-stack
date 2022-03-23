import { useState } from "react";
import "./listinput.scss";

export default function ListItem() {
  const [input, setInput] = useState("");

  // const base_url = 'connect-2-dublin.heroku.com/api/v3';

  // const base_url = process.env.DATABASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { input };
      await fetch(`/todos`, {
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
