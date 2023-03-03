import Login from "./pages/Login/index.js";
import Register from "./pages/Signup_form/index.js";
import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
