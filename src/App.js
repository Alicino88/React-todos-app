import "./App.scss";
import "./custom.scss";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLogin = () => {
    setIsLogged(!isLogged);
  };
  return (
    <div className="App">
      <NavBar onSetIsLogged={toggleLogin} isLogged={isLogged} />
      {!isLogged && <Welcome />}
    </div>
  );
}

export default App;
