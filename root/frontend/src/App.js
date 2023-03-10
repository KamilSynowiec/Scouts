import Login from "./pages/Login/index.js";
import Register from "./pages/Signup_form/index.js";
import Home from "./pages/Home/index.js";
import PersonalInformation from "./pages/PersonalInformation/index.js";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/personalInfo" element={<PersonalInformation/>}/>
      </Routes>
    </div>
  );
}

export default App;
