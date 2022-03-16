import { useState } from "react";
import ListInput from "./ListInput";
import List from "./List";
import "./body.scss";
import sunIcon from "../images/icon-sun.svg";
import moonIcon from "../images/icon-moon.svg";

export default function Body() {
  const [dark, setDark] = useState(true);
  const setTheme = () => {
    setDark(() => !dark);
  };

  return (
    <div className={dark ? "dark" : "light"}>
      <div className="app">
        <div className="body">
          <header>
            <h1>TODO</h1>
            {dark ? (
              <img
                onClick={setTheme}
                src={sunIcon}
                alt="light/dark theme button"
              />
            ) : (
              <img
                onClick={setTheme}
                src={moonIcon}
                alt="light/dark theme button"
              />
            )}
          </header>
          <div className="todo-container">
            <ListInput />
            <List />
          </div>
          <p className="reorder">Drag and drop to reorder list</p>
        </div>
      </div>
    </div>
  );
}
