import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const countCompletedTodos = () => {
    return todos.filter((todo) => todo.isComplete).length;
  };

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer countCompletedTodos={countCompletedTodos} />
    </div>
  );
};

export default Todo;
