import Login from "./pages/Login/index.js";
import Register from "./pages/Signup/index.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Login className="App-Login"/>
      <Register/>
    </div>
  );
}

export default App;
