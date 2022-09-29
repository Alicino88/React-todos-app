import "./App.scss";
import "./custom.scss";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";
import LoginForm from "./Components/LoginForm";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLogin = () => {
    setIsLogged(!isLogged);
  };
  return (
    <div className="App">
      <NavBar onSetIsLogged={toggleLogin} isLogged={isLogged} />
      {!isLogged && <Welcome />}
      {isLogged && <LoginForm />}
    </div>
  );
}

export default App;
