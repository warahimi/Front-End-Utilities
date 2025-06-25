import React from "react";

function Todo({ todo, index, dispatch }) {
  const handleComplete = () => {
    dispatch({ type: "toggle-complete", payload: index });
  };
  const handleRemove = () => {
    dispatch({ type: "remove", payload: index });
  };

  return (
    <div>
      <span className={`${todo.complete ? "text-gray-800 line-through" : ""}`}>
        {todo.name} : {todo.complete ? "Complete" : "Not Complete"}
      </span>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleComplete}
        className="ml-5 h-5 w-5"
      />
      <button
        type="button"
        onClick={handleRemove}
        className="ml-5 text-red-700"
      >
        x
      </button>
    </div>
  );
}

export default Todo;
