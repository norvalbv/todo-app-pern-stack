export default function TodoFilter({ setAll, currentlyActive, setActive, setComplete }) {
  return (
    <div className="todo-filter">
      <button
        onClick={() => {
          setAll();
          console.log(currentlyActive);
        }}
        className={
          currentlyActive === "currentlyAll"
            ? "currentlyAll sorting"
            : "sorting"
        }
      >
        All
      </button>
      <button
        className={
          currentlyActive === "currentlyActive"
            ? "currentlyAll sorting"
            : "sorting"
        }
        onClick={() => setActive()}
      >
        Active
      </button>
      <button
        className={
          currentlyActive === "currentlyComplete"
            ? "currentlyAll sorting"
            : "sorting"
        }
        onClick={() => setComplete()}
      >
        Completed
      </button>
    </div>
  );
}
