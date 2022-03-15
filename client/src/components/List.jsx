import cross from "../images/icon-cross.svg";
import "./list.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoFilter from "./todofilter";

export default function List({
  todos,
  setTodos,
  handleRemove,
  listNum,
  setActive,
  setAll,
  setComplete,
  currentlyActive,
  clearCompleted,
}) {
  const completeTodo = (id, complete) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !complete,
          };
        }
        return todo;
      })
    );
    console.log(todos.length);
  };

  return (
    <div style={{ paddingBottom: "2.5rem" }} className="list-container">
      {/* <DragDropContext> */}
      {/* <Droppable droppableId="todoList"> */}
      {/* {(provided) => { */}
      {todos.map(({ text, id, complete }, index) => (
        // <Draggable key={id} draggableId={id} index={index}>
        <div
          className="list"
          // {...provided.droppableProps}
          // ref={provided.innerRef}
          key={id}
        >
          <div
            className={complete ? "checkbox checkbox-complete" : "checkbox"}
            onClick={() => {
              completeTodo(id, complete);
            }}
          />
          <div
            className={complete ? "complete list-text" : "list-text"}
            onClick={() => {
              completeTodo(id, complete);
            }}
          >
            {text}
          </div>
          <img
            src={cross}
            alt=""
            className="remove"
            onClick={() => handleRemove(id)}
          />
        </div>
        // </Draggable>
        //
        // }
      ))}
      {/* </Droppable>
      </DragDropContext> */}
      <div className="bottom-nav">
        <div className="left">
          <p className="items-left">{listNum} Items Left</p>
        </div>
        <TodoFilter
          setAll={setAll}
          currentlyActive={currentlyActive}
          setActive={setActive}
          setComplete={setComplete}
        />
        <div className="right">
          <button className="clear-list" onClick={() => clearCompleted()}>
            Clear Completed
          </button>
        </div>
      </div>
      <button onClick={() => setTodos([])} className="clear-all">
        Clear all
      </button>
    </div>
  );
}
