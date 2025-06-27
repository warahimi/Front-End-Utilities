import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import User from "./Pages/User";
import UserProfile from "./Pages/UserProfile";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />}>
          <Route path="userprofile/:id" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
