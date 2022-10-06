import "./App.scss";
import "./custom.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";
import LoginForm from "./Components/LoginForm";
import ToDos from "./Components/ToDos/ToDos";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => {
    setIsLogged(true);
    //console.log(isLogged);
  };

  const logout = () => {
    setIsLogged(false);
  };
  return (
    <div className="App">
      <NavBar isLogged={isLogged} onLogout={logout} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<LoginForm onLogin={login} />} />
        <Route path="mytodos" element={<ToDos />} />
      </Routes>
    </div>
  );
}

export default App;
