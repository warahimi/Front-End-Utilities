import React from "react";
import { useState } from "react";

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", isComplete: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", isCompleted: false });
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl mt-10 flex p-10 m-3 rounded-2xl flex-col justify-center items-center md:flex-row transition-all ease-in-out"
      >
        <input
          type="text"
          placeholder="Enter a todo"
          value={todo.name}
          onChange={(e) => {
            setTodo({ name: e.target.value, isComplete: false });
          }}
          className="border-2 border-gray-300 p-4 rounded-2xl h-20 mb-4 w-full ml-0 m-2 text-3xl font-bold"
        />
        <button
          type="submit"
          className="border-2 border-gray-300 p-4 rounded-2xl h-20 w-50 m-2 bg-amber-400 text-3xl font-bold text-white hover:bg-amber-500 hover:border-2 hover:border-gray-400"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
