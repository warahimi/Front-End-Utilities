import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.isComplete).length;
  const totalTodos = todos.length;
  const sortedTodo = todos.sort((todo1, todo2) => {
    return Number(todo1.isComplete) - Number(todo2.isComplete);
  });

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={sortedTodo} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
};

export default Todo;
