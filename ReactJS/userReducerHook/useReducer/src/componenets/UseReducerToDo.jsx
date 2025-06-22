import React, { useReducer, useState } from "react";
import Todo from "./Todo";

const ACTIONS = {
  ADD: "add",
  TOGGLE_COMPLETE: "toggle-complete",
  REMOVE: "remove",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(action.payload)];
    case ACTIONS.TOGGLE_COMPLETE:
      return todos.map((todo, index) => {
        if (index === action.payload) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.REMOVE:
      return todos.filter((todo, index) => {
        return index != action.payload;
      });
    default:
      return todos;
  }
}

function newTodo(name) {
  return { time: Date.now(), name: name, complete: false };
}

function UseReducerToDo() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    dispatch({ type: ACTIONS.ADD, payload: name });
    setName("");
  };

  return (
    <div className="flex flex-col items-center justify-center text-4xl gap-5">
      <h1 className="text-5xl font-bold text-center mt-10">
        Todo Using useReducer
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="p-4 border-2 rounded-2xl ml-4"
          />
        </div>
        <button
          type="submit"
          className="border-2 rounded-2xl mt-4 bg-amber-100"
        >
          Add
        </button>
      </form>

      {/* Display todos */}
      <ul className="mt-10">
        {todos.map((todo, index) => (
          <li key={todo.time}>
            <Todo todo={todo} index={index} dispatch={dispatch} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerToDo;
