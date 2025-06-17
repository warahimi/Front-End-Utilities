import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl m-3 p-3 mt-5">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
