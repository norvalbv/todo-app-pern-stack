import React, { useState } from "react";
import check from "../images/icon-check.svg";
import "./listinput.scss";

export default function ListItem({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.random(),
      text: input,
      complete: false,
    });
    setInput("");
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
          // ref={inputRef}
          className="todo-input"
        />
      </form>
    </div>
  );
}
