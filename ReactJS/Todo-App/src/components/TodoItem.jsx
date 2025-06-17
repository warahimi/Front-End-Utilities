import React from "react";
function TodoItem({ todo, index, todos, setTodos }) {
  const handleDelete = () => {
    const filteredArray = todos.filter((_, i) => i != index);
    setTodos(filteredArray);
  };
  const handleComplete = () => {
    const updatedTodo = todos.map((todo, i) =>
      i === index ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updatedTodo);
  };

  console.log(todo);
  return (
    <div className="text-3xl font-bold">
      <h1 className="ml-3">
        <span
          onClick={handleComplete}
          className={todo.isComplete ? "line-through text-gray-500" : ""}
        >
          {todo.name}{" "}
        </span>
        <button
          onClick={handleDelete}
          className="float-right mr-5 bg-amber-400 w-10 h-10 rounded text-white"
        >
          x
        </button>
      </h1>
      <div className="bg-gray-200 h-0.5 ml-3 mr-3 mb-5 mt-2"></div>
    </div>
  );
}

export default TodoItem;
