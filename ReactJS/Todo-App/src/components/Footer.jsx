import React from "react";

function Footer({ completedTodos, totalTodos }) {
  return (
    <div className="text-4xl font-bold bg-amber-400 flex flex-col md:flex-row md:gap-32 justify-center items-center h-30 m-3 transition-all ease-in-out">
      <span className="mb-3 md:m-0">Completed Todos: {completedTodos}</span>{" "}
      <span>Total Todos: {totalTodos}</span>
    </div>
  );
}

export default Footer;
