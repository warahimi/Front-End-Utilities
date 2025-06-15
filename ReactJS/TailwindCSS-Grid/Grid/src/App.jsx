import React from "react";
import "./App.css";

function App() {
  return (
    <div className="grid-container text-white text-2xl font-bold">
      <div className="area-header bg-purple-400 flex justify-center items-center h-20">
        Header
      </div>
      <div className="area-banner bg-red-400 flex justify-center items-center h-20">
        Banner
      </div>
      <div className="area-left bg-green-600 flex justify-center items-center h-full min-h-0">
        Left Side
      </div>
      <div className="area-main bg-blue-400 flex flex-col justify-center items-center min-h-[300px] p-4">
        <h1>Main Content</h1>
        <p>Width: 492, Height: 873</p>
      </div>
      <div className="area-right bg-yellow-400 flex justify-center items-center h-full min-h-0">
        Right Aside
      </div>
      <div className="area-low bg-green-400 flex justify-center items-center h-20">
        Low Content
      </div>
      <div className="area-footer bg-blue-200 flex justify-center items-center h-20">
        Footer
      </div>
    </div>
  );
}

export default App;
