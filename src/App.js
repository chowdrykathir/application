import React, { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import User from "./User";
import Setting from "./Setting";
import Contact from "./Contact";
const App = () => {
  const [open, setopen] = useState(false);
  const handleClick = () => {
    setopen(!open);
  };

  return (
    <div>
     
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<Setting />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
      <Header click={handleClick} />
      <Sidebar open={open} />
    </div>
  );
};
export default App;
