import React from "react";

function InnerContainer({ children }) {
  return <div className="flex w-full">{children}</div>;
}

export default InnerContainer;
