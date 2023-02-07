import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";


import "./styles/index.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
