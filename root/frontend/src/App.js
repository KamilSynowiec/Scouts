import Login from "./pages/Login/index.js";
import Register from "./pages/Signup_form/index.js";
import Home from "./pages/Home/index.js";
import PersonalInformation from "./pages/PersonalInformation/index.js";
import YourGoal from "./pages/YourGoal/index.js";
import Portfolio from "./pages/Portfolio/index.js";
import AddAchievement from "./pages/Portfolio/AddAchievement/index.js";
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
        <Route path="/yourGoal" element={<YourGoal/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/addAchievement" element={<AddAchievement/>}/>
      </Routes>
    </div>
  );
}

export default App;
