import Login from "./pages/Login/index.js";
import Register from "./pages/Signup_form/index.js";
import Home from "./pages/Home/index.js";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
