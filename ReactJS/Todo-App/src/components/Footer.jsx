import React from "react";

function Footer({ countCompletedTodos }) {
  return <div className="text-3xl font-bold">{countCompletedTodos()}</div>;
}

export default Footer;
